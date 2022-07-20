import { Middleware } from 'redux';

import { RootState } from '../types';

const contextMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = store => next => action => {
  return next(action);
};

export default contextMiddleware;
