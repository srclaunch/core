export enum ServiceType {
  API = 'api',
  CoreAPI = 'core-api',
  Custom = 'custom',
  FiniteStateMachine = 'finite-state-machine',
  MachineLearningClassifier = 'machine-learning-classifier',
  Queue = 'queue',
  WebSocket = 'web-socket',
}

export type Service = {
  readonly id: string;
  readonly name: string;
  readonly type: ServiceType;
};

export type ServiceOptions = Service;
