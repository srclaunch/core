import { memo, MouseEvent, ReactElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Amount,
  LinkProps as LinkProperties,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import {
  TextDecorationLine,
  TextDecorationStyle,
} from '../../types/typography';
import { Icon } from '../media/icon';
import { Text, TextProps as TextProperties } from './text';

export const Link = memo(
  ({
    children,
    textColor = TextColors.Link,
    textDecoration = {
      line: [TextDecorationLine.Underline],
      style: TextDecorationStyle.Solid,
    },
    textSize = TextSize.Small,
    textWeight = TextWeight.Default,
    to,
    ...properties
  }: LinkProperties): ReactElement => {
    return (
      <RouterLink
        to={to}
        style={{
          outline: 'none',
        }}
      >
        <Text
          textDecoration={textDecoration}
          textColor={textColor}
          textWeight={textWeight}
          {...properties}
        >
          {children}
        </Text>
      </RouterLink>
    );
  },
);
