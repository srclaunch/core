import { Image as ImageType, Video as VideoType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BackgroundImageSize,
  ContainerProps,
  Orientation,
  Position,
  TextColor,
  TextSize,
  TextWeight,
} from '../../types';
import { Card } from '../cards/card';
import { Container } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { MenuProps } from '../menus/menu';
import { MenuItemProps } from '../menus/menu-item';
import { MoreMenu, MoreMenuProps } from '../menus/more-menu';
import { Label } from '../typography/label';
import { Video } from './video';

export type MediaGridItemProps = MenuProps<{
  readonly description?: string | null;
  readonly element?: ReactElement;
  readonly image?: ImageType;
  readonly minHeight?: Amount | number;
  readonly title?: string;
  readonly url?: string;
  readonly video?: VideoType;
}>;

export const MediaGridItem = memo(
  ({
    backgroundColor = BackgroundColor.Dark,
    borderRadius = Amount.Less,
    description,
    image,
    minHeight,
    items,
    title,
    url,
    video,
    ...props
  }: MediaGridItemProps) => {
    const content = image ? (
      <Container
        alignHorizontal={AlignHorizontal.Stretch}
        orientation={Orientation.Horizontal}
        alignVertical={AlignVertical.Center}
        padding={Amount.Default}
      >
        <Label
          textColor={TextColor.White}
          textSize={TextSize.Large}
          textWeight={TextWeight.Most}
        >
          {title}
        </Label>

        <Spacer />

        {items && <MoreMenu items={items} />}
      </Container>
    ) : video ? (
      <Video
        className="media-grid-video"
        description={video.description}
        path={video.path}
        url={video.url}
      />
    ) : (
      <Label padding={Amount.Default}>Image not found</Label>
    );

    return (
      <Card
        alignHorizontal={AlignHorizontal.Stretch}
        orientation={Orientation.Vertical}
        alignVertical={AlignVertical.Bottom}
        backgroundColor={backgroundColor}
        backgroundImage={image?.url ?? image?.path}
        backgroundImageSize={BackgroundImageSize.Cover}
        borderRadius={borderRadius}
        linkTo={url}
      >
        {content}
      </Card>
    );
  },
);
