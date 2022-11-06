import { memo, ReactElement } from 'react';

import { ContainerProps } from '../../types';
import { Container } from '../layout/container';

type BadgeProps = ContainerProps<{
  readonly label?: number | string;
}>;

export const Badge = memo(
  ({ children, label, ...props }: BadgeProps): ReactElement => {
    return <Container {...props}>{label?.toString() ?? children}</Container>;
  },
);
