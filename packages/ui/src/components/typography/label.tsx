import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Orientation,
  Size,
  TextAlign,
  TextColor,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Icon, IconProps } from '../media/icon';
import { Text, TextProps } from './text';

export type LabelProps<
  P = Record<string, unknown>,
  E = HTMLSpanElement,
> = ContainerProps<
  P &
    TextProps<E> & {
      readonly icon?: IconProps;
    },
  E
>;

export const Label = memo(
  ({
    as = 'span',
    alignHorizontal = AlignHorizontal.Left,
    children,
    className = '',
    icon,
    lineHeight = Size.Default,
    orientation = Orientation.Horizontal,
    lineWrap = false,
    textSelectable = true,
    state,
    textAlign = TextAlign.Default,
    textColor = TextColor.Default,
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    alignVertical = AlignVertical.Center,
    ...props
  }: LabelProps): ReactElement => {
    return (
      <Container
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        orientation={orientation}
        as={as}
        className={`${className} label`}
        state={state}
        {...props}
      >
        {icon &&
          (icon.component ||
            icon.name ||
            icon.path ||
            icon.url ||
            icon.svg) && <Icon marginRight={Amount.Least} {...icon} />}

        <Text
          lineHeight={lineHeight}
          lineWrap={lineWrap}
          state={state}
          textSelectable={textSelectable}
          textAlign={textAlign}
          textColor={textColor}
          textOverflow={textOverflow}
          textSize={textSize}
          textWeight={textWeight}
          {...props}
        >
          {children}
        </Text>
      </Container>
    );
  },
);
