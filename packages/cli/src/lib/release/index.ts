import { ReleaseOptions } from '@srclaunch/types';
import { Writable } from 'node:stream';
import SemanticRelease from 'semantic-release';

// const isCI = require('is-ci');
// # !isCI && require('dotenv').config({ path: '../../.env' });

export async function createSemanticRelease({
  dryRun,
  local,
  name,
}: ReleaseOptions): Promise<
  | {
      readonly commits?: number;
      readonly type?: string;
      readonly version: string;
    }
  | false
> {
  class EchoStream extends Writable {
    public override _write(chunk: Buffer, enc: string, next: () => void) {
      if (chunk.includes('err ')) {
        console.error(chunk.toString());
      }
      next();
    }
  }

  const errStream = new EchoStream();
  const outStream = new EchoStream();

  const result = await SemanticRelease(
    {
      branches: [{ name: 'main' }],
      ci: !local,
      dryRun,
      extends: ['semantic-release-commit-filter'],
      pkgRoot: 'dist',
      plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
          '@semantic-release/npm',
          {
            npmPublish: true,
            pkgRoot: process.cwd(),
          },
        ],
        '@semantic-release/github',
      ],
      tagFormat: `${name}@\${version}`,
    },
    {
      cwd: process.cwd(),
      env: (process.env as { [name: string]: string }) ?? {},
      stderr: errStream as SemanticRelease.Config['stderr'],
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
