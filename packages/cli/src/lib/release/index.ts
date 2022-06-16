import { Writable } from 'node:stream';
import SemanticRelease from 'semantic-release';

// const isCI = require('is-ci');
// # !isCI && require('dotenv').config({ path: '../../.env' });

export async function createSemanticRelease({
  name,
}: {
  readonly name: string;
}): Promise<
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
      // branch: 'main',
      branches: [{ name: 'main' }],
      // ci: false,
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
            // tarballDir: 'dist',
          },
        ],
        '@semantic-release/github',
      ],
      // githubApiPathPrefix: '/api-prefix',
      // // Plugin options
      // githubUrl: 'https://my-ghe.com',
      tagFormat: `${name}@\${version}`,

      // repositoryUrl: 'https://github.com/me/my-package.git',
    },
    {
      cwd: process.cwd(),
      env: (process.env as { [name: string]: string }) ?? {},
      stderr: errStream as SemanticRelease.Config['stderr'],
      stdout: outStream as SemanticRelease.Config['stdout'],
    },
  );

  if (result) {
    const { lastRelease, commits, nextRelease, releases } = result;

    return {
      commits: commits.length,
      type: nextRelease.type,
      version: nextRelease.version,
    };
    // for (const release of releases) {
    //   console.log(
    //     `The release was published with plugin "${release.pluginName}".`,
    //   );
    // }
  } else {
    console.info('no release published.');
    return false;
  }
}
// // Get stdout and stderr content
// const errors = stderrBuffer.getContentsAsString('utf8');
