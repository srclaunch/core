export enum Runner {
  Node = 'node',
  Vite = 'vite',
}

export type RunnerOptions = {
  runner: Runner;
};
