import { DevelopmentEnvironment, RemoteEnvironment } from '../environment';

export type WorkspacePackage = {
  readonly name?: string;
  readonly path: string;
  readonly repository?: string;
};

export type WorkspaceConfig = {
  readonly mediaDir?: string;
  readonly coreApi?: Omit<WorkspacePackage, 'name'> & {
    readonly environments: {
      readonly development: DevelopmentEnvironment;
      readonly preview: RemoteEnvironment;
      readonly qa: RemoteEnvironment;
      readonly production: RemoteEnvironment;
    };
  };
  readonly dependencies?: {
    readonly exceptions: WorkspacePackage;
    readonly httpClient: WorkspacePackage;
    readonly models: WorkspacePackage;
    readonly reduxState: WorkspacePackage;
    readonly sequelizeModels: WorkspacePackage;
    readonly types: WorkspacePackage;
  };
  readonly description?: string;
  readonly infrastructure?: {
    readonly path: string;
  };
  readonly projects?: {
    readonly [key: string]: WorkspacePackage;
  };
  readonly exceptionsDir?: string;
  readonly modelsDir?: string;
  readonly name: string;
  readonly repository?: string;
  readonly sdks?: {
    readonly coreApi: WorkspacePackage | boolean;
    readonly dataClient: WorkspacePackage | boolean;
    readonly exceptions: WorkspacePackage | boolean;
    readonly httpClient: WorkspacePackage | boolean;
    readonly models: WorkspacePackage | boolean;
    readonly reduxStore: WorkspacePackage | boolean;
    readonly rtkQueryApi: WorkspacePackage | boolean;
    readonly rtkSlices: WorkspacePackage | boolean;
    readonly sequelizeModels: WorkspacePackage | boolean;
    readonly types: WorkspacePackage | boolean;
  };
  readonly typesDir?: string;
};
