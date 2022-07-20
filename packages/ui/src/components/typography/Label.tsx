import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  Orientation,
  Sizes,
  TextAlign,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Icon, IconProps } from '../media/icon';
import { Text, TextProps } from './text';

export type LabelProps = ContainerProps &
  TextProps & {
    readonly icon?: IconProps;
  };

export const Label = memo(
  ({
    alignment = {},
    as = 'span',
    children,
    className = '',
    icon,
    lineHeight = Sizes.Default,
    lineWrap = false,
    selectable = true,
    states = {},
    textAlign = TextAlign.Default,
    textColor = TextColors.Default,
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    ...props
  }: LabelProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        as={as}
        className={`${className} label`}
        states={states}
        {...props}
      >
        {icon &&
          (icon.component ||
            icon.name ||
            icon.path ||
            icon.url ||
            icon.svg) && (
            <Icon margin={{ right: Amount.Least, ...icon.margin }} {...icon} />
          )}

        <Text
          lineHeight={lineHeight}
          lineWrap={lineWrap}
          selectable={selectable}
          states={states}
          textAlign={textAlign}
          textColor={textColor}
          textOverflow={textOverflow}
          textSize={textSize}
          textWeight={textWeight}
        >
          {children}
        </Text>
      </Container>
    );
  },
);
