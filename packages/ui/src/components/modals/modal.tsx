import { memo, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { MoreMenuProps } from '../menus';
import { ModalHeader } from './modal-header';

type ModalProps = PropsWithChildren<{
  readonly moreMenu?: MoreMenuProps;
  readonly onClose?: () => void;
  readonly title?: ReactElement | ReactNode | string;
  readonly visible?: boolean;
}>;

export const Modal = memo(
  ({
    children,
    moreMenu,
    onClose,
    title,
    visible,
  }: ModalProps): ReactElement => {
    return createPortal(
      <Container className="modal-container" visible={visible}>
        {/* @ts-ignore */}
        <ModalHeader moreMenu={moreMenu} onClose={onClose} title={title} />

        <Content>{children}</Content>
      </Container>,
      document.querySelector('#root') as HTMLElement,
    );
  },
);

const Container = styled.div<{ readonly visible?: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  opacity: ${props => (props.visible ? '1' : '0')};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-out;
  z-index: 500000;
`;

const Content = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
