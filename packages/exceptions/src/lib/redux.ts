import { Exception } from './exception';

export function captureReduxThunkException(err: Error | Exception): void {
  if (err instanceof Exception) {
  } else if (err instanceof Error) {
  }
}
