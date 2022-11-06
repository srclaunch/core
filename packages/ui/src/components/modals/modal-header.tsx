import { ComponentType, memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  ContainerProps,
  Orientation,
} from '../../types';
import { Container } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { MoreMenu, MoreMenuProps } from '../menus/more-menu';
import { Title } from '../typography/title';
import { CloseButton } from './close-button';

export type ModalHeaderProps = ContainerProps & {
  readonly moreMenu?: MoreMenuProps;
  readonly onCloseClick?: () => unknown;
  readonly title?: ReactElement;
};

export const ModalHeader = memo(
  ({
    alignHorizontal = AlignHorizontal.Stretch,
    orientation = Orientation.Horizontal,
    alignVertical = AlignVertical.Center,
    className = '',
    onCloseClick,
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

        <CloseButton onClick={onCloseClick} marginLeft={Amount.Less} />
      </Container>
    );
  },
);
