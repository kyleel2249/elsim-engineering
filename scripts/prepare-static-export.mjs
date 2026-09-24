#!/usr/bin/env node
/**
 * Cross-platform static-export wrapper for Cloudflare Pages.
 *
 * `output: 'export'` cannot build route handlers, so the previous build script
 * ran `rm -rf app/api` — which destroyed the quotation endpoint on every build
 * and only worked on a Unix shell.
 *
 * This script instead moves app/api to a temporary location, runs the export,
 * and restores it afterwards — including when the build fails or the process
 * is interrupted. Nothing is deleted, and it runs identically on Windows,
 * macOS and Linux.
 */

import { spawn } from 'node:child_process';
import { existsSync, renameSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const apiDir = resolve(root, 'app', 'api');
const stashDir = resolve(root, '.api-stash');

let stashed = false;

function stash() {
  if (!existsSync(apiDir)) return;
  if (existsSync(stashDir)) rmSync(stashDir, { recursive: true, force: true });
  renameSync(apiDir, stashDir);
  stashed = true;
  console.log('[static-export] app/api moved aside for the export build');
}

function restore() {
  if (!stashed) return;
  stashed = false;
  if (existsSync(apiDir)) rmSync(apiDir, { recursive: true, force: true });
  if (existsSync(stashDir)) {
    renameSync(stashDir, apiDir);
    console.log('[static-export] app/api restored');
  }
}

for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP']) {
  process.on(signal, () => {
    restore();
    process.exit(1);
  });
}
process.on('exit', restore);
process.on('uncaughtException', (error) => {
  restore();
  console.error(error);
  process.exit(1);
});

stash();

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['next', 'build'],
  {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      CF_PAGES_STATIC: '1',
      NEXT_PUBLIC_STATIC_EXPORT: '1',
      // `--offline` also swaps in the system-font fallback (see lib/fonts.ts)
      ...(process.argv.includes('--offline') ? { OFFLINE_FONTS: '1' } : {}),
    },
  }
);

child.on('close', (code) => {
  restore();
  process.exit(code ?? 1);
});
