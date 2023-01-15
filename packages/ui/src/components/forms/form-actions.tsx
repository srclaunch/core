import { memo, ReactElement } from 'react';

import { AlignHorizontal, Amount, Orientation } from '../../types';
import { Container, ContainerProps } from '../layout/container';

export const FormActions = memo(
  ({ children, ...props }: ContainerProps): ReactElement => {
    return (
      <Container
        alignHorizontal={AlignHorizontal.SpaceBetween}
        orientation={Orientation.Horizontal}
        className="form-actions"
        marginTop={Amount.More}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
