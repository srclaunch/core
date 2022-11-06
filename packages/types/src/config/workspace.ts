import {
  DevelopmentEnvironmentOptions,
  RemoteEnvironmentOptions,
} from '../environment';

export type WorkspacePackage = {
  readonly name: string;
  readonly path: string;
};

export type WorkspaceConfig = {
  readonly apps?: {
    readonly [key: string]: WorkspacePackage;
  };
  readonly description?: string;
  readonly infrastructure?: {
    readonly path: string;
  };
  readonly name: string;
  readonly owner?: string;
  readonly repository?: string;
  readonly sdk: {
    readonly coreApi: WorkspacePackage & {
      readonly environments: {
        readonly development: DevelopmentEnvironmentOptions;
        readonly preview?: RemoteEnvironmentOptions;
        readonly production?: RemoteEnvironmentOptions;
        readonly qa?: RemoteEnvironmentOptions;
      };
    };
    readonly dataClient: WorkspacePackage;
    readonly exceptions: WorkspacePackage;
    readonly httpClient: WorkspacePackage;
    readonly models: WorkspacePackage;
    readonly reduxStore: WorkspacePackage;
    readonly rtkQueryApi: WorkspacePackage;
    readonly rtkSlices: WorkspacePackage;
    readonly sequelizeModels: WorkspacePackage;
    readonly types: WorkspacePackage;
  };
  readonly services?: {
    readonly [key: string]: WorkspacePackage;
  };
};
