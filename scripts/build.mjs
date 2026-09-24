#!/usr/bin/env node
/**
 * Build entrypoint.
 *
 * Chooses the right target automatically so the deployment cannot be built the
 * wrong way by a stale dashboard setting:
 *
 *   - On Cloudflare Pages (CF_PAGES=1 is set by the platform) -> static export
 *     into `out/`, which is what Pages serves.
 *   - Anywhere else -> a normal `next build`, keeping API routes.
 *
 * Override explicitly with:
 *   FORCE_STATIC_EXPORT=1   force the export, off-platform
 *   FORCE_SERVER_BUILD=1    force the server build, on-platform
 */

import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

const onCloudflarePages = process.env.CF_PAGES === '1' || Boolean(process.env.CF_PAGES_BRANCH);
const wantsStatic =
  process.env.FORCE_STATIC_EXPORT === '1' ||
  (onCloudflarePages && process.env.FORCE_SERVER_BUILD !== '1');

const args = process.argv.slice(2);

if (wantsStatic) {
  console.log('[build] Cloudflare Pages detected — building a static export into out/');
  run(process.execPath, [resolve(here, 'prepare-static-export.mjs'), ...args]);
} else {
  console.log('[build] Building for a Node target — API routes included');
  run(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'build']);
}

function run(command, commandArgs) {
  const child = spawn(command, commandArgs, { stdio: 'inherit', env: process.env });
  child.on('close', (code) => process.exit(code ?? 1));
}
