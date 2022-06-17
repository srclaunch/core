import { DeploymentOptions } from '@srclaunch/types';
import { publish } from 'gh-pages';
import pc from 'picocolors';

export async function deployToGitHubPages(
  options: DeploymentOptions,
): Promise<void> {
  try {
    await publish(options?.input?.directory ?? '.', {
      add: !options?.output?.clean ?? true,
      branch: options?.output?.branch ?? 'gh-pages',
      dest: options?.output?.path ?? '.',
      message:
        options?.output?.commitMessage ??
        'chore(docs): deploying to GitHub Pages',
    });

    console.log(`${pc.green('✔ deployed to GitHub Pages')} `);
  } catch {
    console.error(`${pc.red('✖ failed to deploy to GitHub pages')} `);
  }
}
