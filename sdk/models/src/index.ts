import { Model } from '@srclaunch/types';
export * from "./srclaunch/index";

import * as Models from "./srclaunch/index";

export function getModels(): Record<string, Model> {
  return Models as Record<string, Model>;
}