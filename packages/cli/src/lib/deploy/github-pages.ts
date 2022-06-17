import { DeploymentOptions } from '@srclaunch/types';
import { publish } from 'gh-pages';
import pc from 'picocolors';

export async function deployToGitHubPages({
  input,
  output,
}: DeploymentOptions): Promise<void> {
  try {
    await publish(input?.directory ?? '.', {
      add: !output?.clean ?? true,
      branch: output?.branch ?? 'gh-pages',
      dest: output?.path ?? '.',
      message:
        output?.commitMessage ?? 'chore(docs): deploying to github pages',
      repo: output?.repo,
    });

    console.log(`${pc.green('✔ deployed to GitHub Pages')} `);
  } catch {
    console.error(`${pc.red('✖ failed to deploy to GitHub Pages')} `);
  }
}
