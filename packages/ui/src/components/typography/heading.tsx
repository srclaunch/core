import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './label';

type HeadingProperties = LabelProps;

export const Heading = memo(
  ({
    as = 'h3',
    children,
    className = '',
    lineHeight = Size.Large,
    textWeight = TextWeight.More,
    textColor = TextColor.Dark,
    textSize = TextSize.Large,
    ...properties
  }: HeadingProperties): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} heading`}
        lineHeight={lineHeight}
        textColor={textColor}
        textWeight={textWeight}
        textSize={textSize}
        {...properties}
      >
        {children}
      </Label>
    );
  },
);
