import { memo } from 'react';

import { AlignHorizontal, AlignVertical, Amount, Fill } from '../../types';
import { Container, ContainerProps } from '../layout';

export const Canvas = memo(
  ({
    alignHorizontal = AlignHorizontal.Center,
    alignVertical = AlignVertical.Center,
    children,
    fill = Fill.Both,
    padding = Amount.Most,
    className = '',
    ...props
  }: ContainerProps) => {
    return (
      <Container
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        className={`${className} canvas`}
        fill={fill}
        padding={padding}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
