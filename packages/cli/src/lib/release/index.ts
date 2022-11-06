import { ReleaseConfig } from '@srclaunch/types';
import { Writable } from 'node:stream';
import SemanticRelease from 'semantic-release';

// const isCI = require('is-ci');
// # !isCI && require('dotenv').config({ path: '../../.env' });

export async function createSemanticRelease({
  dryRun,
  force,
  local,
  name,
}: ReleaseConfig): Promise<
  | false
  | {
      readonly commits?: number;
      readonly type?: string;
      readonly version: string;
    }
> {
  class EchoStream extends Writable {
    public override _write(chunk: Buffer, enc: string, next: () => void) {
      if (chunk.includes('err ')) {
        console.error(chunk.toString());
      }
      next();
    }
  }

  const errorStream = new EchoStream();
  const outStream = new EchoStream();

  process.env.FORCE_PUBLISH = force ? 'true' : 'false';

  const result = await SemanticRelease(
    {
      branches: [{ name: 'main' }],
      ci: !local,
      dryRun,
      extends: ['semantic-release-commit-filter'],
      pkgRoot: 'dist',
      plugins: [
        '@srclaunch/ci-cd',
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
          '@semantic-release/npm',
          {
            npmPublish: true,
            pkgRoot: process.cwd(),
          },
        ],
        // '@semantic-release/github',
      ],
      tagFormat: `${name}@\${version}`,
    },
    {
      cwd: process.cwd(),
      env: (process.env as { [name: string]: string }) ?? {},
      stderr: errorStream as SemanticRelease.Config['stderr'],
      stdout: outStream as SemanticRelease.Config['stdout'],
    },
  );

  if (result) {
    const { commits, nextRelease } = result;

    return {
      commits: commits.length,
      type: nextRelease.type,
      version: nextRelease.version,
    };
  } else {
    console.info('no release published.');
    return false;
  }
}
