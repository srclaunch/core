import { Response } from 'express';

import { Exception } from './exception';
import { UnmanagedException } from './exceptions/index';

export type ExceptionResponse = {
  readonly code: number;
  readonly description?: string;
  readonly friendlyMessage?: string;
};

export class ExceptionRemediator {
  // eslint-disable-next-line functional/prefer-readonly-type
  private exception?: Exception = undefined;

  handleException(
    err: Exception | Error,
    { res }: { readonly res: Response },
  ): Response<ExceptionResponse> {
    console.log('err in exceptionRemediator', err);
    this.exception =
      err instanceof Exception
        ? err
        : new UnmanagedException(err.name, {
            cause: err,
          });

    const response = this.getExceptionResponse();

    if (response) {
      return res.status(response.code).json(response.body);
    }

    return res.status(500).json({
      code: 99_999,
      description: 'An unknown error occurred.',
      friendlyMessage: 'An unknown error occurred.',
    });
  }

  getExceptionResponse(): {
    readonly body: ExceptionResponse;
    readonly code: number;
  } | null {
    if (this.exception) {
      const { code, description, friendlyMessage, remediation } =
        this.exception;

      const responseCode = remediation?.response?.code ?? 500;

      return {
        body: {
          code,
          description,
          friendlyMessage,
        },
        code: responseCode,
      };
    }

    return null;
  }
}
