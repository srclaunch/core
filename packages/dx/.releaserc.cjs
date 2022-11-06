module.exports = {
  branches: [{ name: 'main' }],
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
  tagFormat: `v\${version}`,
};
