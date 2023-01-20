import { memo, ReactElement } from 'react';

import { Amount, BackgroundColor, Size } from '../../types';
import { Container, ContainerProps } from '../layout/container';

type OrbProps = ContainerProps<{
  readonly color?: BackgroundColor;
}>;

export const Orb = memo(
  ({
    backgroundColor = BackgroundColor.Default,
    className = '',
    borderRadius = Amount.Full,
    size = Size.Smallest,
    ...props
  }: OrbProps): ReactElement => {
    return (
      <Container
        className={`${className} orb`}
        background={backgroundColor}
        borderRadius={borderRadius}
        size={size}
        {...props}
      />
    );
  },
);
