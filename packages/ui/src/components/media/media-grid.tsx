import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  ContainerProps,
  Fill,
  Orientation,
} from '../../types';
import { Container } from '../layout/container';
import { LoadingOverlay } from '../progress/loading-overlay';
import { MediaGridItem, MediaGridItemProps } from './media-grid-item';

export type MediaGridProps = ContainerProps<{
  readonly className?: string;
  readonly columns?: number;
  readonly items: readonly MediaGridItemProps[];
}>;

export const MediaGrid = memo(
  ({
    borderRadius = Amount.Default,
    children,
    columns = 5,
    className = '',
    fill = Fill.Both,
    items = [],

    state,
    ...props
  }: MediaGridProps): ReactElement => {
    const rows = Array.from({ length: Math.ceil(items.length / columns) }).fill(
      0,
    );

    return (
      <Container
        borderRadius={borderRadius}
        className={`${className} media-grid`}
        fill={fill}
        {...props}
      >
        <LoadingOverlay
          borderRadius={borderRadius}
          state={{
            visible: state?.loading ?? false,
          }}
        />

        {rows.map((x, row) => {
          return (
            <Container
              alignment={{
                orientation: Orientation.Horizontal,
              }}
              className="media-grid-row"
              key={row}
              margin={{ bottom: Amount.Default }}
              size={{
                fill: Fill.Both,
              }}
            >
              {items
                .slice(columns * row, columns * row + columns)
                .map((item, key) => (
                  <MediaGridItem
                    marginRight={Amount.Default}
                    key={key}
                    minHeight={200}
                    minWidth={260}
                    {...item}
                  />
                ))}
            </Container>
          );
        })}
      </Container>
    );
  },
);
