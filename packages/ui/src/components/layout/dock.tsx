import { memo, ReactNode } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  ContainerProps,
  Depth,
  Fill,
  Position,
  Shadow,
} from '../../types';
import { Container } from '../layout';

type DockProps = ContainerProps<{
  readonly bottom?: ReactNode;
  readonly left?: ReactNode;
  readonly right?: ReactNode;
  readonly top?: ReactNode;
}>;

export const Dock = memo(
  ({
    children,
    backgroundColor = BackgroundColor.Light,
    className = '',
    right,
    fill = Fill.Both,
    bottom,
    left,
    shadow = Shadow.Low,
    top,
  }: DockProps) => {
    return (
      <Container
        alignHorizontal={AlignHorizontal.Center}
        alignVertical={AlignVertical.Center}
        borderRadius={Amount.Least}
        backgroundColor={backgroundColor}
        className={`${className} dock`}
        fill={fill}
        shadow={shadow}
      >
        <Container
          paddingRight={right ? `calc(300px + ${Amount.Default})` : 0}
          position={Position.Absolute}
          positionBottom={0}
          positionLeft={0}
          positionRight={0}
          positionTop={0}
          width="auto"
        >
          {children}
        </Container>

        {right && (
          <Container
            depth={Depth.Highest}
            position={Position.Absolute}
            positionBottom={Amount.Less}
            positionTop={Amount.Less}
            positionRight={Amount.Less}
            shadow={Shadow.High}
            width={300}
          >
            {right}
          </Container>
        )}
      </Container>
    );
  },
);
