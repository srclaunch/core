import { BuildOptions } from '../build';
import { ChangesetOptions } from '../changeset';
import { EnvironmentOptions } from '../environment';
import { PackageOptions } from '../package';
import { ProjectType } from '../project';
import { RequirementOptions } from '../project/requirements';
import { ReleaseOptions } from '../release';
import { RepositoryOptions } from '../repository';
import { TestOptions } from '../test';
import { WorkflowConfig } from './workflow';
import { WorkspaceConfig } from './workspace';

export type ProjectConfig = {
  readonly build?: BuildOptions | readonly BuildOptions[];
  readonly changesets?: ChangesetOptions;
  readonly description?: string;
  readonly environments?: EnvironmentOptions;
  readonly name: string;
  readonly package?: PackageOptions;
  readonly release?: ReleaseOptions;
  readonly repository?: RepositoryOptions;
  readonly requirements?: RequirementOptions;
  readonly test?: TestOptions;
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
