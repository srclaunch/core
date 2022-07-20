import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BackgroundSize,
  Orientation,
  Position,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Card } from '../cards/card';
import { Container, ContainerProps } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { MenuProps } from '../menus/menu';
import { MenuItemProps } from '../menus/menu-item';
import { MoreMenu, MoreMenuProps } from '../menus/more-menu';
import { Label } from '../typography/label';
import { Video } from './video';

export type MediaGridItemProps = ContainerProps & {
  readonly description?: string | null;
  readonly element?: ReactElement;
  readonly image?: ImageType;
  readonly minHeight?: Amount | number;
  readonly menu?: readonly MenuItemProps[];
  readonly title?: string;
  readonly url?: string;
  readonly video?: VideoType;
};

export const MediaGridItem = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    description,
    image,
    minHeight,
    menu,
    title,
    url,
    video,
    ...props
  }: MediaGridItemProps) => {
    const content = image ? (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        padding={{ all: Amount.Default }}
      >
        <Label
          textColor={TextColors.White}
          textSize={TextSize.Large}
          textWeight={TextWeight.Most}
        >
          {title}
        </Label>

        <Spacer />

        {menu && <MoreMenu menu={menu} />}
      </Container>
    ) : video ? (
      <Video
        className="media-grid-video"
        description={video.description}
        path={video.path}
        url={video.url}
      />
    ) : (
      <Label padding={{ all: Amount.Default }}>Image not found</Label>
    );

    return (
      <Card
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Vertical,
          vertical: AlignVertical.Bottom,
          ...alignment,
        }}
        background={{
          color: BackgroundColors.Dark,

          image: {
            size: BackgroundSize.Cover,
            url: image?.url ?? image?.path,
          },
          ...background,
        }}
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        linkTo={url}
        {...props}
      >
        {content}
      </Card>
    );
  },
);
