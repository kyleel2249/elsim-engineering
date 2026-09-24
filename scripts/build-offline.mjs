#!/usr/bin/env node
/**
 * Build with the offline font fallback enabled.
 *
 * Use when the build machine cannot reach fonts.googleapis.com. The output is
 * identical except that display/body/mono resolve to a system stack instead of
 * Space Grotesk and IBM Plex. See lib/fonts.offline.ts.
 */
import { spawn } from 'node:child_process';

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['next', 'build'],
  { stdio: 'inherit', env: { ...process.env, OFFLINE_FONTS: '1' } }
);

child.on('close', (code) => process.exit(code ?? 1));
