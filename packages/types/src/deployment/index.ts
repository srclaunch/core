import { InfrastructureOptions } from './infrastructure';

export enum DeploymentStrategy {
  BlueGreen = 'blue-green',
  Canary = 'canary',
  Rolling = 'rolling',
}

export type Deployment = {
  readonly infrastructure?: InfrastructureOptions;
  readonly strategy?: DeploymentStrategy;
};

// export type Deployment = {
//   readonly id: string;
//   readonly status: DeploymentStatus;
//   readonly target: DeploymentTarget;
//   readonly ApplicationId: Application['id'];
//   readonly EnvironmentId: Environment['id'];
//   readonly CreatedDate: DateTime;
//   readonly PipelineWorkflowId: PipelineWorkflow['id'];
// };
