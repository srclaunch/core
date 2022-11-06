import { ActionInput } from './input';
import { ActionOutput } from './output';
import { ActionStatus } from './status';
import { ActionType } from './type';

// export declare interface Action<I = ActionInput, O = ActionOutput> {
//   readonly action?: Action;
//   readonly description?: string;
//   readonly environment?: { readonly [key: string]: unknown };
//   readonly id?: string;
//   readonly input: I;
//   readonly name?: string;
//   readonly output?: O;
//   readonly shell?: { readonly [key: string]: string };
//   readonly status?: ActionStatus;
//   readonly steps?: {
//     readonly [key: string]: Action<ActionInput, ActionOutput>;
//   };
//   readonly type?: ActionType;
// }
