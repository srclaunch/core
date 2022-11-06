export enum ChangeType {
  /**
   * A change created from an automated source.
   */
  Automated = 'automated',
  /**
   * Change that fix a bug
   */
  BugFix = 'fix',
  /**
   * Change that affect build components like build tool, ci pipeline, dependencies, project version
   */
  Build = 'build',
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

export type ChangesetConfig = {
  readonly logs: {
    readonly path: string;
  };
  readonly types: ReadonlyArray<{
    readonly [key: string]: {
      readonly hidden?: boolean | undefined;
      readonly section?: string | undefined;
      readonly type: string;
    };
  }>;
};

export type Change = {
  readonly diff: {
    readonly added: readonly string[];
    readonly modified: readonly string[];
    readonly removed: readonly string[];
  };
  readonly id: string;
};

export type Changeset = {
  readonly changes?: readonly Change[];
  readonly files?: string | readonly string[];
  readonly id?: string;
  readonly message: string;
  readonly remote?: {
    readonly synced?: boolean;
  };
  readonly scope?: string;
  readonly type: ChangeType;
};
