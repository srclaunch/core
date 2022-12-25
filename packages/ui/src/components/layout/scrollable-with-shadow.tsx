import { PropsWithChildren, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useScroll } from '../../lib/hooks/use-scroll';
import { Orientation } from '../../types';

const Container = styled.div<{
  readonly borderRadius?: number;
  readonly inset?: boolean;
  readonly maxHeight?: number;
  readonly maxWidth?: number;
}>`
  border-radius: ${props => props.borderRadius ?? 0}px;
  display: flex;
  flex-direction: inherit;
  flex: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${({ inset }) =>
    inset &&
    css`
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    `}

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight}px;
    `}

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}
`;

const Content = styled.div<{
  readonly maxHeight?: number;
  readonly maxWidth?: number;
  readonly orientation: Orientation;
}>`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${({ orientation }) =>
    (orientation === Orientation.Horizontal
      ? css`
          overflow-x: auto;
        `
      : css`
          overflow-y: auto;
        `)}
`;

const TopScrollShadow = styled.div<{
  readonly boxShadow?: string;
}>`
  position: absolute;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: ${props => props.boxShadow};
  height: 24px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
`;

const RightScrollShadow = styled.div<{
  readonly boxShadow?: string;
}>`
  bottom: 0;
  box-shadow: ${props => props.boxShadow};
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: box-shadow 0.2s ease-in-out;
  width: 24px;
`;

const BottomScrollShadow = styled.div<{
  readonly boxShadow?: string;
}>`
  position: absolute;
  transition: box-shadow 0.2s ease-in-out;
  bottom: 0;
  box-shadow: ${props => props.boxShadow};
  height: 24px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
`;

const LeftScrollShadow = styled.div<{
  readonly boxShadow?: string;
}>`
  bottom: 0;
  box-shadow: ${props => props.boxShadow};
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: box-shadow 0.2s ease-in-out;
  width: 24px;
`;

export const Scrollable = ({
  borderRadius = 0,
  children,
  inset = false,
  maxHeight,
  maxWidth,
  orientation = Orientation.Vertical,
}: PropsWithChildren<{
  readonly borderRadius?: number;
  readonly inset?: boolean;
  readonly maxHeight?: number;
  readonly maxWidth?: number;
  readonly orientation?: Orientation;
}>) => {
  const { boxShadow, getDimensions, onScrollHandler } = useScroll();
  const containerReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerReference.current) {
      getDimensions(containerReference.current);
    }
  }, [children]);

  return (
    <Container borderRadius={borderRadius} className="scrollable" inset={inset}>
      <Content
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        orientation={orientation}
        onScroll={onScrollHandler}
        ref={containerReference}
      >
        {children}
      </Content>

      <TopScrollShadow boxShadow={boxShadow.top} />
      <RightScrollShadow boxShadow={boxShadow.right} />
      <BottomScrollShadow boxShadow={boxShadow.bottom} />
      <LeftScrollShadow boxShadow={boxShadow.left} />
    </Container>
  );
};
