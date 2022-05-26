import { ChangesetWorkflow } from '../workflow/changeset';

export enum ChangeType {
  /**
   * A change created from an automated source.
   */
  Automated = 'automated',
  /**
   * Change that affect build components like build tool, ci pipeline, dependencies, project version
   */
  Build = 'build',
  /**
   * Change that fix a bug
   */
  BugFix = 'fix',
  /**
   * Miscellaneous change e.g. modifying .gitignore
   */
  Chore = 'chore',
  /**
   * Change that affect documentation only
   */
  Documentation = 'docs',
  /**
   * Change that adds a new feature
   */
  Feature = 'feature',
  /**
   * Change that adds a new feature
   */
  Performance = 'perf',
  /**
   * Change that rewrites/restructures your code, however does not change any behaviour
   */
  Refactor = 'refactor',
  /**
   * Change that affects infrastructure, deployments, or releases
   */
  Release = 'release',
  /**
   * Change that rolls back another change
   */
  RollBack = 'revert',
  /**
   * Change to code that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
   */
  Style = 'style',
  /**
   * Change that add missing tests or fix/improve existing tests
   */
  Test = 'test',
}

export type ChangesetOptions = {
  readonly logs: {
    readonly path: string;
  };
  readonly types: Array<{
    [key: string]: {
      type: string;
      section?: string | undefined;
      hidden?: boolean | undefined;
    };
  }>;
  readonly workflows?: ChangesetWorkflow[];
};

export type Change = {
  readonly id: string;
  readonly diff: {
    readonly added: string[];
    readonly removed: string[];
    readonly modified: string[];
  };
};

export type Changeset = {
  readonly id?: string;
  readonly changes?: Change[];
  readonly files?: string | string[];
  readonly message: string;
  readonly remote?: {
    readonly synced?: boolean;
  };
  readonly scope?: string;
  readonly type: ChangeType;
};
