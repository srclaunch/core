export enum GitHubActionTrigger {
  PullRequest = 'pull_request',
  Push = 'push',
  Release = 'release',
}

export enum GitHubActionRunnerOS {
  UbuntuLatest = 'ubuntu-latest',
}

export interface GitHubActionJobStep {
  readonly name: string;
  readonly run?: string;
  readonly uses?: string;
  readonly with?: Record<string, string>;
}
export const getGitHubActionTemplate = ({
  name,
  jobs,
  trigger,
}: {
  readonly jobs: Record<
    string,
    {
      readonly name: string;
      readonly runsOn?: GitHubActionRunnerOS;
      readonly steps: ReadonlyArray<GitHubActionJobStep>;
    }
  >;
  readonly name: string;
  readonly trigger: {
    readonly branches: ReadonlyArray<string>;
    readonly on: GitHubActionTrigger;
  };
}) => `name: ${name}

on:
  ${trigger.on}:
    branches:
      ${trigger.branches.map(branch => `- ${branch}`).join('\n')}

concurrency:
  group: publish-\${{ github.ref }}-1
  cancel-in-progress: true

jobs:
  ${Object.keys(jobs).map((jobName, index) => {
    const job = jobs[jobName];

    return `${jobName}:
    name: ${job?.name}
    runs-on: ${job?.runsOn ?? GitHubActionRunnerOS.UbuntuLatest}

    steps:
${job?.steps
  ?.map(step => {
    const stepName = step.name;
    const stepRun = step.run;
    const stepUses = step.uses;
    const stepWith = step.with;

    return `      - name: ${stepName}
        ${stepRun ? `run: ${stepRun}` : ''}${
      stepUses ? `uses: ${stepUses}` : ''
    }
${
  stepWith
    ? `        with:
${Object.keys(stepWith)
  .map(key => `          ${key}: ${stepWith[key]}`)
  .join('\n')}`
    : ''
}
        `;
  })
  .join('\n')}`;
  })}
    `;
