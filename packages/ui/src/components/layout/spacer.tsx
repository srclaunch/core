import { memo, ReactElement } from 'react';

import { Fill } from '../../types';
import { Container, ContainerProps } from './container';

export type SpacerProps = ContainerProps;

export const Spacer = memo(
  ({
    as = 'div',
    children,
    fill = Fill.Both,
    ...props
  }: SpacerProps): ReactElement => {
    return (
      <Container as={as} fill={fill} {...props}>
        {children}
      </Container>
    );
  },
);
