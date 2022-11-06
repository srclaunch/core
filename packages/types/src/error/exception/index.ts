import { Model } from '../../data/model';
import { ModelField } from '../../data/model/field';
import { LogLevel } from '../../logging/level';
import { HttpRequest } from '../../networking/http';
import { Task } from '../../workflow/task';
import { ExceptionRemediation } from './remediation';

/**
 *
 * Base exception and inherited classes constructor arguments
 * @constructor
 * @arg {Record<string, unknown>} context - Contextual data related to the exception that can be used for debugging
 * @arg {string} file - The file the exception originated in. Useful for debugging.
 * @arg {string} func - The function or method the exception originated in. Useful for debugging.
 * @arg {string} description - A developer friendly description of the exception.
 * @arg {Model['id']} model.id - The unique id of the model associated with the exception.
 * @arg {Model['type']} model.type - The type of model associated with the exception.
 * @arg {Record<string,string>} request.headers - The request headers.
 * @arg {string} field - The name of the field as passed in the request if a validation error occurs.
 * @arg {string} request.id - A unique ID associated with the request used for tracing the exception.
 * @arg {any} request.body - The body payload of the request.
 * @arg {Record<string,string>} request.headers - The request headers.
 * @arg {string} request.host - The HTTP host the requested resource is accessible from.
 * @arg {string} request.method - The request's HTTP method.
 * @arg {string} request.resource - The HTTP resource being requested.
 * @arg {any} response.body - The response body payload.
 * @arg {HttpResponseCode} response.code - The HTTP response status code.
 * @arg {HttpResponseCodeDetails} response.details - The headers returned from the response.
 * @arg {Record<string,string>} response.headers - The headers returned from the response.
 * @arg {string} request.method - The request's HTTP method.
 * @arg {string} request.resource - The HTTP resource being requested.
 * @arg {string} scope - Higher-level scope of the exception.
 * @arg {ExceptionRemediation} remediation - Recommended remediation details.
 * @arg {Record<string, unknown>} tags - Key/value tags associated with an exception.
 * @arg {Task['id']} task.id - The unique id of a Task associated with the exception.
 * @arg {string} user.email - The user's email address.
 * @arg {string} user.phone - The user's telephone number.
 */
export type ExceptionConstructorArgs = {
  readonly cause?: Error;
  readonly context?: Record<string, unknown>;
  readonly data?: unknown;
  readonly description?: string;
  readonly form?: {
    readonly field?: string;
    readonly problem?: Error;
  };
  readonly friendlyMessage?: string;
  readonly logLevel?: LogLevel.Critical | LogLevel.Error | LogLevel.Warning;
  readonly model?: {
    readonly field?: ModelField['name'];
    readonly name: Model['name'];
    readonly problem?: Error;
  };
  readonly origin?: {
    readonly block?: string;
    readonly file?: string;
    readonly function?: string;
  };
  readonly pii?: boolean;
  readonly remediation?: ExceptionRemediation;
  readonly request?: HttpRequest;
  readonly response?: {
    readonly status?: {
      readonly code: number;
    };
  };
  readonly scope?: string;
  readonly tags?: Record<string, unknown>;
  readonly task?: {
    readonly id: Task['id'];
  };
  readonly user?: {
    readonly email?: string;
    readonly id?: string;
    readonly phone?: string;
  };
};

export type ExceptionObject = ExceptionConstructorArgs & {
  readonly code?: string;
  readonly created?: string;
  readonly id?: string;
  readonly message?: string;
  readonly name?: string;
  readonly stack?: string;
};

export * from './remediation';
