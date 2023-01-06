import { memo, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';

import { ContainerProps } from '../layout';
import { MoreMenuProps } from '../menus';
import { ModalHeader } from './modal-header';

type ModalProps = ContainerProps<{
  readonly moreMenu?: MoreMenuProps;
  readonly onClose?: () => void;
  readonly title?: ReactElement | ReactNode | string;
  readonly visible?: boolean;
}>;

export const Modal = memo(
  ({
    children,
    className = '',
    moreMenu,
    onClose,
    title,
    visible,
  }: ModalProps): ReactElement => {
    return createPortal(
      <>
        <Container className="modal-container">
          <Overlay className={`modal-overlay ${className}`} visible={visible} />

          <ModalPanel visible={visible}>
            <ModalHeader moreMenu={moreMenu} onClose={onClose} title={title} />

            <ModalContent>{children}</ModalContent>
          </ModalPanel>
        </Container>
      </>,
      document.querySelector('#root') as HTMLElement,
    );
  },
);

const Overlay = styled.div<{
  readonly visible?: boolean;
}>`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  height: 100%;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition: opacity 0.15s ease-in-out;
  width: 100%;
  z-index: 100;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

const Container = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
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
  overflow-y: scroll;
`;
