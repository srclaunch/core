import { WebApplicationOptions } from '../config/web-application';

export enum Runner {
  Node = 'node',
  TSNode = 'ts-node',
  Vite = 'vite',
}

export type RunConfig<R = Record<string, unknown>> = {
  readonly runner?: Runner.Vite | Runner.TSNode | Runner.Node;
} & R;
