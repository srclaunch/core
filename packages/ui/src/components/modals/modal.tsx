import { PropsWithChildren, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import { MoreMenu } from '../menus/more-menu';
import { CloseButton } from './close-button';

const Overlay = styled.div<{
  readonly visible?: boolean;
}>`
  background: rgba(255, 255, 255, 0.9);
  height: 100%;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition: opacity 0.15s ease-in-out;
  width: 100%;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  pointer-events: none;
  position: fixed;
  width: 100%;
`;

const ModalPanel = styled.div<{
  readonly visible?: boolean;
}>`
  background: white;
  border-radius: 16px;
  box-shadow: 0px 8px 50px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 32px;
  max-height: calc(100% - 64px);
  max-width: 600px;
  opacity: 0;
  pointer-events: none;
  position: relative;
  transform: scale(0.97) translateY(-25px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  width: 580px;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: scale(1) translateY(0px);
    `}
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
  overflow: hidden;
  overflow-y: auto;
`;

const Title = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  padding: 32px;

  h2 {
    color: rgba(37, 40, 43, 1);
    display: flex;
    flex-grow: 1;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
`;

const TitleActions = styled.div`
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div`
  display: flex;
  flex: 0;
`;

const Close = styled.div`
  display: flex;
  flex: 0;
  margin-left: 16px;
`;

export const Modal = ({
  children,
  close,
  moreMenu,
  title,
  visible,
}: PropsWithChildren<{
  readonly close?: () => void;
  readonly moreMenu?: ReadonlyArray<
    | {
        readonly color?: string;
        readonly disabled?: boolean;
        readonly icon?: ReactElement;
        readonly label: string;
        readonly onClick: () => void;
      }
    | undefined
  >;
  readonly title?: string;
  readonly visible?: boolean;
}>): ReactElement =>
  createPortal(
    <>
      <Overlay className="modal-overlay" visible={visible} />

      <Container
        className="modal-container"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <ModalPanel className="modal" visible={visible}>
          <Title>
            {title && <h2>{title}</h2>}

            <TitleActions>
              <Menu>{moreMenu && <MoreMenu menu={moreMenu} />}</Menu>

              <Close>
                <CloseButton onClick={close} />
              </Close>
            </TitleActions>
          </Title>

          <ModalContent>{children}</ModalContent>
        </ModalPanel>
      </Container>
    </>,
    document.body,
  );
