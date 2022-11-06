import { InfrastructureOptions } from './infrastructure';
import { DeploymentPlatform } from './platform';
import { DeploymentStrategy } from './strategy';

export type DeploymentOptions = {
  readonly infrastructure?: InfrastructureOptions;
  readonly input?: {
    readonly directory?: string;
  };
  readonly output?: {
    readonly branch?: string;
    readonly clean?: boolean;
    readonly commitMessage?: string;
    readonly path?: string;
    readonly repo?: string;
  };
  readonly platform?: DeploymentPlatform;
  readonly strategy?: DeploymentStrategy;
};

export * from './infrastructure';
export * from './platform';
export * from './strategy';
// export type Deployment = {
//   readonly id: string;
//   readonly status: DeploymentStatus;
//   readonly target: DeploymentTarget;
//   readonly ApplicationId: Application['id'];
//   readonly EnvironmentId: Environment['id'];
//   readonly CreatedDate: DateTime;
//   readonly PipelineWorkflowId: PipelineWorkflow['id'];
// };
