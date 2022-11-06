import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  Fill,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from './container';

export const Scrollable = memo(
  ({
    alignHorizontal = AlignHorizontal.Stretch,
    backgroundColor = BackgroundColor.Transparent,
    alignVertical = AlignVertical.Stretch,
    overflow = Overflow.ScrollVertical,
    children,
    className = '',
    fill = Fill.Both,
    ...props
  }: ContainerProps<{
    readonly direction?: 'both' | 'horizontal' | 'vertical';
  }>): ReactElement => {
    return (
      <Container
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        overflow={overflow}
        backgroundColor={backgroundColor}
        className={`${className} scrollable`}
        fill={fill}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
