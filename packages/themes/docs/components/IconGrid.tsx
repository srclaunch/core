import { memo, ReactElement } from 'react';
import { Icon } from '../..';
import { Container } from '@srclaunch/ui';

export const IconGrid = memo(
  ({ set }: { set: Icon} ): ReactElement => {

  return (
    <Container>{Object.keys(set)}</Container>
  );
})