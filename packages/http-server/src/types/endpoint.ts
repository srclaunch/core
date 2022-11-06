import { HttpRequestMethod } from '@srclaunch/types';
import { Request, Response } from 'express';

export type Endpoint = {
  readonly handler: (request: Request, res: Response) => any;
  readonly method: HttpRequestMethod;
  readonly route: string;
};
