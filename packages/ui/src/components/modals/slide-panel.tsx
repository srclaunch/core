import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  ContainerProps,
  Depth,
  Position,
  Shadow,
} from '../../types';
import { Container } from '../layout/container';

type SlidePanelProps = ContainerProps<{
  readonly origin?: number;
}>;

export const SlidePanel = memo(
  ({
    backgroundColor = BackgroundColor.SlidePanel,
    borderRadius = Amount.Most,
    children,
    className = '',
    depth = Depth.Highest,
    origin = 500,
    padding = Amount.Less,
    shadow = Shadow.Highest,
    width = 630,
    ...props
  }: SlidePanelProps): ReactElement => {
    return (
      <Container
        // animations={}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} slide-panel`}
        depth={depth}
        padding={padding}
        position={Position.Fixed}
        positionBottom={Amount.Default}
        positionRight={Amount.Default}
        positionTop={Amount.Default}
        shadow={shadow}
        width={width}
        visible={{
          // animations: [
          //   {
          //     from: {
          //       transform: {
          //         translate: {
          //           x: origin,
          //         },
          //       },
          //     },
          //     timing: {
          //       duration: 0.13,
          //       iterations: 1,
          //     },
          //     to: {
          //       transform: {
          //         translate: {
          //           x: 0,
          //         },
          //       },
          //     },
          //   },
          // ],
          transform: {
            translate: {
              x: 0,
            },
          },
        }}
        transform={{
          translate: {
            x: origin,
          },
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
