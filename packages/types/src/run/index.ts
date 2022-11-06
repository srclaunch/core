export enum Runner {
  Node = 'node',
  TSNode = 'ts-node',
  Vite = 'vite',
}

export type RunOptions<R = Record<string, unknown>> = R & {
  readonly runner?: Runner.Node | Runner.TSNode | Runner.Vite;
  readonly watch?: readonly string[];
};
