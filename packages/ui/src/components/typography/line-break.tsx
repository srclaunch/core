import { memo, ReactElement } from 'react';

import { Size, Sizes } from '../../types';
import { Container, ContainerProps } from '../layout/container';

type LineBreakProps = ContainerProps;

export const LineBreak = memo(
  ({
    className = '',
    size = {
      height: Sizes.Default,
    },
    ...props
  }: LineBreakProps): ReactElement => {
    return (
      <Container className={`${className} link-break`} size={size} {...props} />
    );
  },
);
