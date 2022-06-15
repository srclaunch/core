import SemanticRelease from 'semantic-release';

export async function createSemanticRelease() {
  const result = await SemanticRelease({
    // branch: 'main',
    branches: [{ name: 'main' }],
    // ci: false,
    // dryRun: true,
    extends: 'semantic-release-monorepo',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/npm',
      '@semantic-release/github',
    ],
  });

  return result;
}
