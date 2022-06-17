import { WebAppOptions } from '../config/web-application';
import { Environments } from '../environment';

export enum Runner {
  Node = 'node',
  TSNode = 'ts-node',
  Vite = 'vite',
}

export type RunOptions = {
  readonly [key in Environments]?:
    | (WebAppOptions & {
        readonly runner?: Runner.Vite;
      })
    | {
        readonly runner?: Runner.TSNode;
      }
    | {
        readonly runner?: Runner.Node;
      };
};
