import pc from 'picocolors';
import semanticRelease from 'semantic-release';

export async function createSemanticRelease() {
  const result = await semanticRelease(
    {
      // branch: 'main',
      branches: [{ name: 'main' }],
      // ci: false,
      // dryRun: true,
      extends: 'semantic-release-monorepo',

      // githubApiPathPrefix: '/api-prefix',

      // // Plugin options
      // githubUrl: 'https://my-ghe.com',

      plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        '@semantic-release/github',
      ],

      // repositoryUrl: 'https://github.com/me/my-package.git',
    },
    {
      // Run semantic-release from `/path/to/git/repo/root` without having to change local process `cwd` with `process.chdir()`
      cwd: '/path/to/git/repo/root',
      // Pass the variable `MY_ENV_VAR` to semantic-release without having to modify the local `process.env`
      env: (process.env as { [name: string]: string }) ?? {},

      // stderr: stderrBuffer,
      // // Store stdout and stderr to use later instead of writing to `process.stdout` and `process.stderr`
      // stdout: stdoutBuffer,
    },
  );

  if (result) {
    const { lastRelease, commits, nextRelease, releases } = result;

    if (lastRelease.version) {
      console.log(`The last release was "${lastRelease.version}".`);
    }

    console.log(
      `${pc.green('✔')} published ${nextRelease.type} release version ${
        nextRelease.version
      } containing ${commits.length} commits.`,
    );

    // for (const release of releases) {
    //   console.log(
    //     `The release was published with plugin "${release.pluginName}".`,
    //   );
    // }
  } else {
    console.log('no release published.');
  }

  // // Get stdout and stderr content
  // const logs = stdoutBuffer.getContentsAsString('utf8');
  // const errors = stderrBuffer.getContentsAsString('utf8');

  return result;
}
