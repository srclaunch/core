import { Image as ImageType, Video } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  ContainerProps,
  Orientation,
} from '../../types';
import { Container } from '../layout/container';
import { Image } from './image';

export type MediaPreviewProps = ContainerProps<{
  readonly media?: readonly (ImageType | Video)[];
}>;

export const MediaPreview = memo(
  ({
    alignVertical = AlignVertical.SpaceBetween,
    alignHorizontal = AlignHorizontal.SpaceBetween,
    orientation = Orientation.Horizontal,
    borderRadius = Amount.Less,
    className = '',
    media,
    ...props
  }: MediaPreviewProps): ReactElement => {
    if (!media || media.length === 0) return <Container>No media</Container>;

    return (
      <Container className={`${className} media-preview`} {...props}>
        {media && media.length > 0 && media[0] && (
          // <Container
          //   backgroundColor={BackgroundColor.Dark}
          //   backgroundImage={{
          //     position: Align.Center,
          //     size: BackgroundSize.Cover,
          //     url: media?.[0]?.url ?? media?.[0]?.path,
          //   }}
          //   borderRadius={borderRadius}
          //   overflow={Overflow.Hidden}
          // />
          <Image
            {...media[0]}
            alt={media[0].description}
            borderRadius={borderRadius}
            // height="100%"
            maxWidth={300}
            url={media[0].url ?? media?.[0]?.path}
          />
        )}

        {media && media.slice(1).length > 0 && (
          <Container
            alignHorizontal={alignHorizontal}
            orientation={orientation}
            alignVertical={alignVertical}
          >
            {media.slice(1).map((item, k) => {
              return (
                <Image
                  {...item}
                  alt={item.description}
                  borderRadius={Amount.Least}
                  key={k}
                  marginLeft={
                    orientation === Orientation.Horizontal
                      ? Amount.Less
                      : Amount.None
                  }
                  marginTop={
                    orientation === Orientation.Horizontal
                      ? Amount.Less
                      : Amount.None
                  }
                  url={item.url}
                />
              );
            })}
          </Container>
        )}
      </Container>
    );
  },
);
