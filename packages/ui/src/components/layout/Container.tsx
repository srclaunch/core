import {
  forwardRef,
  memo,
  PropsWithChildren,
  ReactElement,
  ReactEventHandler,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import { getEventHandlers } from '../../lib/events';
import { getContainerStyles } from '../../styles/container';
import { getContainerStatesStyles } from '../../styles/container/states';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Animation,
  Background,
  Border,
  BorderRadius,
  CommonComponentProps as CommonComponentProperties,
  Cursor,
  Depth,
  DepthShadow,
  Events,
  Fill,
  Margin,
  Orientation,
  Padding,
  Position,
  Shadow,
  Size,
  States,
  Visibility,
} from '../../types';
import { Transform } from '../../types/appearance/transform';

export type ContainerProps = PropsWithChildren<
  CommonComponentProperties & {
    readonly alignment?: Alignment;
    readonly animations?: readonly Animation[];
    readonly background?: Background;
    readonly border?: Border;
    readonly borderRadius?: BorderRadius;
    readonly cursor?: Cursor;
    readonly depth?: Depth;
    readonly events?: Events;
    readonly margin?: Margin;
    readonly padding?: Padding;
    readonly position?: Position;
    readonly scrollable?: boolean;
    readonly shadow?: DepthShadow | Shadow;
    readonly size?: Size;
    readonly states?: States<ContainerProps>;
    readonly transform?: Transform;
    readonly visibility?: Visibility;
  }
>;

const Wrapper = styled.div<ContainerProps>`
  ${properties => getContainerStyles(properties)};
  ${properties => getContainerStatesStyles(properties)};
`;

export const Container = memo(
  forwardRef<unknown, ContainerProps>(
    (
      {
        alignment,
        as = 'div',
        children,
        className = '',
        events = {},
        states = {},
        ...properties
      },
      reference,
    ): ReactElement => {
      const [eventHandlers, setEventHandlers] = useState<{
        [key: string]: ReactEventHandler;
      }>({});

      useEffect(() => {
        if (events && Object.keys(events).length > 0) {
          setEventHandlers(getEventHandlers(events));
        }
      }, []);

      return (
        <Wrapper
          alignment={{
            fill: Fill.Both,
            horizontal: AlignHorizontal.Stretch,
            orientation: Orientation.Vertical,
            vertical: AlignVertical.Stretch,
            ...alignment,
          }}
          as={as}
          className={`${className} container`}
          disabled={states?.state?.disabled}
          states={{
            ...states,
            state: {
              ...states.state,
              hidden: states?.state?.visible === false,
            },
          }}
          {...properties}
          {...eventHandlers}
          ref={reference}
        >
          {children}
        </Wrapper>
      );
    },
  ),
);
