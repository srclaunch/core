import { Exception, ExceptionRemediator } from '@srclaunch/exceptions';
import { Logger } from '@srclaunch/logger';
import { HttpRequestMethod } from '@srclaunch/types';
import { Express, NextFunction, Request, Response } from 'express';

import { Endpoint } from '../types/endpoint';

const logger = new Logger();

const remediator = new ExceptionRemediator();

export const HealthcheckEndpoint: Endpoint = {
  handler: (request: Request, res: Response) => {
    return res.sendStatus(200);
  },
  method: HttpRequestMethod.Get,
  route: '/healthcheck',
};

const exceptionWrapper = async (
  request: Request,
  res: Response,
  callback: (q: Request, s: Response) => Endpoint['handler'],
) => {
  try {
    return await callback(request, res);
  } catch (error: any) {
    const exception = new Exception(`Caught Exception ${error.name}`, {
      cause: error,
      tags: {
        file: 'utils/endpoints.js',
        func: 'exceptionWrapper()',
        type: 'CaughtException',
      },
    });

    console.log('exception in exceptionWrapper', exception.toJSON());

    logger.exception(exception.toJSON());

    return remediator.handleException(error, { res });
  }
};

export async function setupEndpoints({
  basePath,
  express,
  endpoints,
}: {
  readonly basePath?: string;
  readonly endpoints: readonly Endpoint[];
  readonly express: Express;
}): Promise<Express> {
  for (const endpoint of endpoints) {
    express[endpoint.method](
      `${basePath}${endpoint.route}`,
      async (request: Request, res: Response) =>
        await exceptionWrapper(request, res, endpoint.handler),
    );
    express.options(
      `${basePath}${endpoint.route}`,
      async (request: Request, res: Response) => res.sendStatus(200),
    );
  }

  express[HttpRequestMethod.Get]('/healthcheck', HealthcheckEndpoint.handler);
  express.options('/healthcheck', (request, res) => res.sendStatus(200));

  return express;
}
