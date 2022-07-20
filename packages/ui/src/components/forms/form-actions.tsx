import { memo, ReactElement } from 'react';

import { AlignHorizontal, Alignment, Amount, Orientation } from '../../types';
import { Container, ContainerProps } from '../layout/container';

export const FormActions = memo(
  ({ children, ...props }: ContainerProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.SpaceBetween,
          orientation: Orientation.Horizontal,
        }}
        className="form-actions"
        margin={{
          top: Amount.More,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
