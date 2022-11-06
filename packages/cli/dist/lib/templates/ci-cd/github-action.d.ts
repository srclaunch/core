export declare enum GitHubActionTrigger {
    PullRequest = "pull_request",
    Push = "push",
    Release = "release"
}
export declare enum GitHubActionRunnerOS {
    UbuntuLatest = "ubuntu-latest"
}
export interface GitHubActionJobStep {
    readonly name: string;
    readonly run?: string;
    readonly uses?: string;
    readonly with?: Record<string, string>;
}
export declare const getGitHubActionTemplate: ({ name, jobs, trigger, }: {
    readonly jobs: Record<string, {
        readonly name: string;
        readonly runsOn?: GitHubActionRunnerOS | undefined;
        readonly steps: ReadonlyArray<GitHubActionJobStep>;
    }>;
    readonly name: string;
    readonly trigger: {
        readonly branches: ReadonlyArray<string>;
        readonly on: GitHubActionTrigger;
    };
}) => string;
//# sourceMappingURL=github-action.d.ts.map