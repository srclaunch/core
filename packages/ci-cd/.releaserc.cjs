module.exports = {
  branches: ['main' ],
      extends: [
        // 'semantic-release-commit-filter'
      ],
      // pkgRoot: 'dist',
      plugins: [
        './dist/index.cjs.js',
   
        // '@semantic-release/commit-analyzer',
        // '@semantic-release/release-notes-generator',
        // [
        //   '@semantic-release/npm',
        //   {
        //     npmPublish: true, 
        //     pkgRoot: process.cwd(),
        //   },
        // ],
        // '@semantic-release/github',
      ],
      tagFormat: `@srclaunch/ci-cd@\${version}`,
    };