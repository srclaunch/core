import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  BorderColor,
  BorderStyle,
  ContainerProps,
  Depth,
  Position,
  Shadow,
} from '../../types';
import { Container } from '../layout/container';

type HoverPanelProps = ContainerProps & {
  readonly detached?: boolean;
};

export const HoverPanel = memo(
  ({
    backgroundColor = BackgroundColor.Lightest,
    borderColor = BorderColor.Transparent,
    borderRadius = Amount.Least,
    children,
    className = '',
    depth = Depth.Higher,
    minWidth = 140,
    state,
    ...props
  }: HoverPanelProps): ReactElement => {
    return (
      <Container
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        className={`${className} hover-panel`}
        depth={depth}
        position={Position.Absolute}
        positionRight={-6}
        positionTop={`calc(100% - 6px)`}
        shadow={state?.visible ? Shadow.Higher : Shadow.Surface}
        state={state}
        minWidth={minWidth}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
