import { memo, ReactElement, ReactNode } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Orientation,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { MoreMenu, MoreMenuProps } from '../menus/more-menu';
import { Title } from '../typography/title';
import { CloseButton } from './close-button';

export type ModalHeaderProps = ContainerProps<
  {
    readonly moreMenu?: MoreMenuProps;
    readonly onClose?: () => unknown;
    readonly title?: ReactElement | ReactNode | string;
  },
  HTMLDivElement
>;

export const ModalHeader = memo(
  ({
    alignHorizontal = AlignHorizontal.Stretch,
    orientation = Orientation.Horizontal,
    alignVertical = AlignVertical.Center,
    className = '',
    onClose,
    moreMenu,
    padding = Amount.Default,
    title,
    ...props
  }: ModalHeaderProps): ReactElement => {
    return (
      <Container
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        orientation={orientation}
        className={`${className} modal-header`}
        padding={padding}
        {...props}
      >
        {title && <Title>{title}</Title>}

        <Spacer />

        {moreMenu && (
          <MoreMenu alignHorizontal={AlignHorizontal.Right} {...moreMenu} />
        )}

        <CloseButton onClick={onClose} marginLeft={Amount.Less} />
      </Container>
    );
  },
);
