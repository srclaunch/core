import { Environment, Platform } from '@srclaunch/types';

import {
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
} from './exceptions/environments/server/process';
import {
  handleProcessExceptions,
  handleProcessInterupt,
  handleProcessTermination,
} from './process';

export type ExceptionsClientOptions = {
  readonly environment?: Environment;
  readonly platform?: Platform;
  readonly node?: {
    readonly exceptionsHandler?: (exception: ProcessException) => void;
    readonly interuptHandler?: (exception: ProcessSigIntException) => void;
    readonly terminationHandler?: (exception: ProcessSigTermException) => void;
  };
};

export class ExceptionsClient {
  private readonly environment?: ExceptionsClientOptions['environment'];
  private readonly platform?: ExceptionsClientOptions['platform'];
  private readonly node?: ExceptionsClientOptions['node'];

  public constructor({ environment, platform, node }: ExceptionsClientOptions) {
    this.environment = environment;
    this.platform = platform;

    if (node) {
      if (node.exceptionsHandler)
        handleProcessExceptions(node.exceptionsHandler);

      if (node.interuptHandler) handleProcessInterupt(node.interuptHandler);

      if (node.terminationHandler)
        handleProcessTermination(node.terminationHandler);
    }
  }
}
