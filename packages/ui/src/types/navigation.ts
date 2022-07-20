import { MouseEvent } from 'react';

import { Icon, TextProps as TextProperties } from '../components';

export type LinkProps = TextProperties & {
  readonly icon?: typeof Icon;
  readonly onClick?: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  readonly prefetch?: boolean;
  readonly rel?: string;
  readonly target?: '_blank';
  readonly to: string;
};
