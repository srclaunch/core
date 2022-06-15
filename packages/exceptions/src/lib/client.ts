import { Environment } from '@srclaunch/types';

import {
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
} from './exceptions/environments/index';
import {
  handleProcessExceptions,
  handleProcessInterupt,
  handleProcessTermination,
} from './process';

export type ExceptionsClientOptions = {
  readonly environment?: Environment;

  readonly node?: {
    readonly exceptionsHandler?: (exception: ProcessException) => void;
    readonly interuptHandler?: (exception: ProcessSigIntException) => void;
    readonly terminationHandler?: (exception: ProcessSigTermException) => void;
  };
};

export class ExceptionsClient {
  private readonly environment?: ExceptionsClientOptions['environment'];

  private readonly node?: ExceptionsClientOptions['node'];

  public constructor({ environment, node }: ExceptionsClientOptions) {
    this.environment = environment;

    if (node) {
      if (node.exceptionsHandler)
        handleProcessExceptions(node.exceptionsHandler);

      if (node.interuptHandler) handleProcessInterupt(node.interuptHandler);

      if (node.terminationHandler)
        handleProcessTermination(node.terminationHandler);
    }
  }
}
