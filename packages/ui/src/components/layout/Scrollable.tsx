import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColors,
  Fill,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from './container';

type ScrollableProps = ContainerProps & {
  readonly direction?: 'both' | 'horizontal' | 'vertical';
};

export const Scrollable = memo(
  ({
    alignment = {},
    children,
    className = '',
    size = {},
    ...props
  }: ScrollableProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          overflow: Overflow.ScrollVertical,
          vertical: AlignVertical.Stretch,
          ...alignment,
        }}
        background={{
          color: BackgroundColors.Transparent,
        }}
        className={`${className} scrollable`}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
