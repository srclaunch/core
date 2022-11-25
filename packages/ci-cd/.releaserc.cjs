const path = require('path');

module.exports = {
  branches: ['main' ],
      extends: [
        // 'semantic-release-commit-filter'
      ],
      // pkgRoot: 'dist',
      plugins: [
        path.join(path.resolve(), 'dist/index.cjs.js'),
   
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