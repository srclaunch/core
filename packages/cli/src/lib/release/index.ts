import { randomInt } from 'node:crypto';
import { WriteStream } from 'node:tty';
import semanticRelease from 'semantic-release';

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
  const stderrStream = new WriteStream(randomInt(10));
  const stdoutStream = new WriteStream(randomInt(10));

  const result = await semanticRelease(
    {
      // branch: 'main',
      branches: [{ name: 'main' }],
      // ci: false,

      dryRun: true,
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
      // Run semantic-release from `/path/to/git/repo/root` without having to change local process `cwd` with `process.chdir()`
      cwd: process.cwd(),
      // Pass the variable `MY_ENV_VAR` to semantic-release without having to modify the local `process.env`
      env: (process.env as { [name: string]: string }) ?? {},

      stderr: stderrStream,
      // // Store stdout and stderr to use later instead of writing to `process.stdout` and `process.stderr`
      stdout: stdoutStream,
    },
  );

  stderrStream.on('data', (data: Buffer) => {
    console.log('stderr', data.toString());
  });

  stdoutStream.on('data', (data: Buffer) => {
    console.log('stdout', data.toString());
  });

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
