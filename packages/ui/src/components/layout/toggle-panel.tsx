import { PropsWithChildren, ReactElement, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import * as Hooks from 'usehooks-ts';
const { useOnClickOutside } = ((Hooks as any).default ?? Hooks) as typeof Hooks;

import { getCSSColorValue } from '../../lib/ui/color';
import { Color } from '../../types';
import { Scrollable } from './scrollable';

const Container = styled.div``;

const Toggle = styled.button<{
  readonly visible: boolean;
}>`
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }

  ${props =>
    props.visible &&
    css`
      background: rgba(255, 255, 255, 0.3) !important;
    `}
`;

const Panel = styled.div<{
  readonly maxHeight?: number;
  readonly minHeight?: number;
  readonly visible: boolean;
}>`
  background: ${getCSSColorValue(Color.White)};
  border-radius: 9px;
  box-shadow: 0 8px 16px ${getCSSColorValue(Color.Black, 0.1)};
  display: flex;
  flex-direction: column;
  min-height: 230px;
  opacity: 0;
  position: absolute;
  right: -12px;
  top: calc(100% - 30%);
  transform: scale(0.97) translateY(-10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
  width: 406px;
  z-index: 1000;

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight}px;
    `}

  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}px;
    `}

  /* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */

  ${({ visible }) =>
    (visible
      ? css`
          opacity: 1;
          pointer-events: all;
          transform: scale(1) translateY(0px);
        `
      : css`
          opacity: 0;
          pointer-events: none;
          transform: scale(0.97) translateY(-10px);
        `)}
`;

const Content = styled.div<{
  readonly maxHeight?: number;
}>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: ${props => props.maxHeight}px;
`;

const Title = styled.h3`
  border-bottom: 1px solid ${getCSSColorValue(Color.Black, 0.05)};
  color: ${getCSSColorValue(Color.NearBlack)};
  font-size: 18px;
  font-weight: 600;
  padding: 12px 24px;
`;

export const TogglePanel = ({
  children,
  maxHeight = 340,
  minHeight = 270,
  title,
  toggle,
}: PropsWithChildren<{
  readonly maxHeight?: number;
  readonly minHeight?: number;
  readonly title?: string;
  readonly toggle: ReactElement;
}>) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setVisible(false);
  });

  return (
    <Container className="toggle-panel" ref={ref}>
      <Toggle onClick={() => setVisible(!visible)} visible={visible}>
        {toggle}
      </Toggle>

      <Panel maxHeight={maxHeight} minHeight={minHeight} visible={visible}>
        {title && <Title>{title}</Title>}

        <Content maxHeight={maxHeight ? maxHeight - 56.5 : undefined}>
          <Scrollable>{children}</Scrollable>
        </Content>
      </Panel>
    </Container>
  );
};
