import { BuildOptions } from '../build';
import { ChangesetOptions } from '../changeset';
import { EnvironmentOptions } from '../environment';
import { PackageOptions } from '../package';
import { Platform } from '../platform';
import { ReleaseOptions } from '../release';
import { RepositoryOptions } from '../repository';
import { TestOptions } from '../test';
import { RequirementOptions } from './requirements';
// import { ProjectWorkflow } from '../workflow/project';

export enum ProjectType {
  APIService = 'api-service',
  CLIApplication = 'cli-application',
  ComponentLibrary = 'component-library',
  CoreAPI = 'core-api',
  DesktopApplication = 'desktop-application',
  GitHubApp = 'github-app',
  GitHubAction = 'github-action',
  FiniteStateMachine = 'finite-state-machine',
  Function = 'function',
  Library = 'library',
  MachineLearningClassifier = 'machine-learning-classifier',
  MobileApplication = 'mobile-application',
  NodeApplication = 'node-application',
  TaskQueue = 'task-queue',
  UniversalApplication = 'universal-application',
  WebApplication = 'web-application',
  WebHook = 'web-hook',
  WebService = 'web-service',
  WebSocketService = 'web-socket-service',
}

export type Project = {
  readonly build?: BuildOptions | readonly BuildOptions[];
  readonly changesets?: ChangesetOptions;
  readonly description?: string;
  readonly environments?: EnvironmentOptions;
  readonly id?: string;
  readonly name: string;
  readonly package?: PackageOptions;
  readonly platform?: Platform;
  readonly release?: ReleaseOptions;
  readonly repository?: RepositoryOptions;
  readonly requirements?: RequirementOptions;
  readonly test?: TestOptions;
  readonly type: ProjectType;
};
