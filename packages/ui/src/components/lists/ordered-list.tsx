import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../layout/container';
import { ListItemProps } from './list-item';

export type OrderedListProps = ContainerProps & {
  readonly items: readonly ListItemProps[];
};

export const OrderedList = memo(
  ({ as = 'ul', children, ...props }: OrderedListProps): ReactElement => {
    return (
      <Container as={as} {...props}>
        {children}
      </Container>
    );
  },
);
