import { PerspectiveOrigin } from './enum';

export type PerspectiveProps = {
  readonly perspective?: number | string;
  readonly perspectiveOrigin?: PerspectiveOrigin | number | string;
};
