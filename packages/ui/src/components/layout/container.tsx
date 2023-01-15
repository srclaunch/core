import {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  HTMLProps,
  memo,
  PropsWithChildren,
  ReactElement,
} from 'react';
import styled from 'styled-components';

import { getContainerStateStyles, getContainerStyles } from '../../styles';
import {
  AlignHorizontal,
  AlignVertical,
  AnimationEventProps,
  AppearanceProps,
  CommonComponentProps,
  CompositionEventProps,
  Fill,
  FocusEventProps,
  KeyboardEventProps,
  LayoutProps,
  MouseEventProps,
  Orientation,
  PointerEventProps,
  ScrollEventProps,
  StateProps,
  TouchEventProps,
  WheelEventProps,
} from '../../types';
import { AccessibilityProps } from '../../types/accessibility';

type ContainerPropsType<
  P = Record<string, unknown>,
  E = HTMLDivElement,
> = PropsWithChildren<
  AccessibilityProps &
    AnimationEventProps &
    AppearanceProps<P> &
    CommonComponentProps<E> &
    CompositionEventProps &
    FocusEventProps &
    KeyboardEventProps &
    LayoutProps<P> &
    MouseEventProps &
    PointerEventProps &
    ScrollEventProps &
    TouchEventProps &
    WheelEventProps
>;

export type ContainerProps<
  P = Record<string, unknown>,
  E = HTMLDivElement,
> = ContainerPropsType<P, E> & StateProps<ContainerPropsType<P, E>>;

const Wrapper = styled.div<ContainerProps>`
  ${props => getContainerStyles(props)};
  ${props => getContainerStateStyles(props)};
`;

export const Container = memo(
  forwardRef<unknown, ContainerProps>(
    (
      {
        alignHorizontal = AlignHorizontal.Stretch,
        orientation = Orientation.Vertical,
        fill = Fill.Horizontal,
        alignVertical = AlignVertical.Stretch,
        as = 'div',
        overflow,
        children,
        className = '',
        ...props
      },
      ref,
    ): ReactElement => {
      const parentProps = {
        alignHorizontal,
        alignVertical,
        as,
        children,
        className,
        fill,
        orientation,
        overflow,
        ...props,
      };

      return (
        <Wrapper
          alignHorizontal={alignHorizontal}
          fillProp={fill}
          alignVertical={alignVertical}
          orientationProp={orientation}
          overflowProp={overflow}
          as={as}
          className={`${className} container`}
          ref={ref}
          {...props}
        >
          {Children.map(children as ReactElement, (child: ReactElement) => {
            if (!child) return;

            if (!child.type) return child;

            if (child.type === Fragment) {
              const fragment = cloneElement(child, {
                ...child.props,
                children: child.props.children as ReactElement[],
                properties: {
                  parentProps,
                },
              });
              // comment to deploy
              return fragment;
            }

            const element = cloneElement(child, {
              ...child.props,
              properties: {
                parentProps,
              },
            });

            return element;
          })}
        </Wrapper>
      );
    },
  ),
);
