import { InfrastructureOptions } from './infrastructure';

export enum DeploymentStrategy {
  BlueGreen = 'blue-green',
  Canary = 'canary',
  Rolling = 'rolling',
}

export enum DeploymentPlatform {
  AWSLambda = 'aws-lambda',
  AWSECS = 'aws-ecs',
  Netlify = 'netlify',
  GitHubPages = 'github-pages',
  Surge = 'surge',
  Vercel = 'vercel',
}

export type DeploymentOptions = {
  readonly input?: {
    readonly directory?: string;
  };
  readonly output?: {
    readonly clean?: boolean;
    readonly branch?: string;
    readonly commitMessage?: string;
    readonly path?: string;
  };
  readonly infrastructure?: InfrastructureOptions;
  readonly platform?: DeploymentPlatform;
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
