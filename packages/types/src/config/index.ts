import { BuildConfig } from '../build';
import { ChangesetConfig } from '../changeset';
import { EnvironmentConfig } from '../environment';
import { PackageConfig } from '../package';
import { ProjectType } from '../project';
import { RequirementConfig } from '../project/requirements';
import { ReleaseConfig } from '../release';
import { RepositoryConfig } from '../repository';
import { TestConfig } from '../test';
import { DocumentationConfig } from './documentation';
import { WorkflowConfig } from './workflow';
import { WorkspaceConfig } from './workspace';

export type ProjectConfig = {
  readonly build?: BuildConfig | readonly BuildConfig[];
  readonly changesets?: ChangesetConfig;
  readonly description?: string;
  readonly documentation?: DocumentationConfig;
  readonly environments?: EnvironmentConfig;
  readonly name: string;
  readonly package?: PackageConfig;
  readonly release?: ReleaseConfig;
  readonly repository?: RepositoryConfig;
  readonly requirements?: RequirementConfig;
  readonly test?: TestConfig;
  readonly type: ProjectType;
  readonly workflows?: WorkflowConfig;
};

export type SrcLaunchConfig = ProjectConfig | WorkspaceConfig;

export type SrcLaunchConfigFile = {
  readonly name: '.srclaunchrc' | 'srclaunch.config';
  readonly extension?:
    | 'ts'
    | 'mts'
    | 'cts'
    | 'js'
    | 'mjs'
    | 'cjs'
    | 'json'
    | 'yaml'
    | 'yml';
};
