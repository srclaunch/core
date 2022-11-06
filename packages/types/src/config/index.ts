import { BuildOptions } from '../build';
import { ChangesetConfig } from '../changeset';
import { EnvironmentOptions } from '../environment';
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
  readonly build?: BuildOptions | readonly BuildOptions[];
  readonly changesets?: ChangesetConfig;
  readonly description?: string;
  readonly documentation?: DocumentationConfig;
  readonly environments?: EnvironmentOptions;
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
  readonly extension?:
    | 'cjs'
    | 'cts'
    | 'js'
    | 'json'
    | 'mjs'
    | 'mts'
    | 'ts'
    | 'yaml'
    | 'yml';
  readonly name: '.srclaunchrc' | 'srclaunch.config';
};

export * from './component-library';
export * from './desktop-application';
export * from './documentation';
export * from './icon-library';
export * from './library';
export * from './mobile-application';
export * from './theme-library';
export * from './web-application';
export * from './workflow';
export * from './workspace';
