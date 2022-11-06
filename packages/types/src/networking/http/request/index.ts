export type HttpRequestHost = string;
export type HttpRequestResource = string;
export type HttpRequestBody = Record<string, unknown> | string | unknown | null;

export enum HttpRequestMethod {
  Delete = 'delete',
  Get = 'get',
  Head = 'head',
  Patch = 'patch',
  Post = 'post',
  Put = 'put',
}

export type HttpRequestHeaders = Record<string, string>;

export type HttpRequest = {
  readonly body?: HttpRequestBody;
  readonly details?: {
    readonly date?: string;
    readonly duration?: number;
    readonly id?: string;
    readonly response?: {
      readonly id?: string;
    };
    readonly size?: number;
  };
  readonly headers?: HttpRequestHeaders;
  readonly host?: HttpRequestHost;
  readonly method: HttpRequestMethod;
  readonly resource: HttpRequestResource;
};
