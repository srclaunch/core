import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  Position,
  Size,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { ProgressSpinner } from './progress-spinner';

export const LoadingOverlay = memo(
  ({
    backgroundColor = BackgroundColor.Darkest,
    backgroundColorOpacity = 85,
    className = '',
    position = Position.Absolute,
    positionBottom = 0,
    positionLeft = 0,
    positionRight = 0,
    positionTop = 0,
    spinnerSize,
    ...props
  }: ContainerProps<{
    readonly spinnerSize?: Size;
  }>): ReactElement => {
    return (
      <Container
        alignHorizontal={AlignHorizontal.Center}
        alignVertical={AlignVertical.Center}
        backgroundColor={backgroundColor}
        backgroundColorOpacity={backgroundColorOpacity}
        className={`${className} loading-overlay`}
        position={position}
        positionBottom={positionBottom}
        positionLeft={positionLeft}
        positionRight={positionRight}
        positionTop={positionTop}
        style={{
          zIndex: 10,
        }}
        {...props}
      >
        <ProgressSpinner size={spinnerSize} />
      </Container>
    );
  },
);
