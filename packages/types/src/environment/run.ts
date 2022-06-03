export enum Runner {
  Node = 'node',
  Vite = 'vite',
}

export type RunOptions = {
  readonly runner: Runner;
  readonly bundle?: {
    readonly external?: readonly string[];
    readonly optimize?: {
      readonly exclude?: readonly string[];
      readonly include?: readonly string[];
    };
  };
};
