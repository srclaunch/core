import { memo, ReactElement } from 'react';

import { Amount } from '../../../types';
import { Container, ContainerProps } from '../../layout/container';

export const InputRow = memo(
  ({
    children,
    className = '',
    margin = {},
    ...props
  }: ContainerProps): ReactElement => {
    return (
      <Container
        className={`${className} input-row`}
        margin={{ bottom: Amount.More, ...margin }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
