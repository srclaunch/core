import { memo, ReactElement } from 'react';

import { ContainerProps, Size } from '../../types';
import { Container } from '../layout/container';

type LineBreakProps = ContainerProps;

export const LineBreak = memo(
  ({
    className = '',
    height = Size.Default,

    ...props
  }: LineBreakProps): ReactElement => {
    return (
      <Container
        className={`${className} link-break`}
        height={height}
        {...props}
      />
    );
  },
);
