import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize, TextWeight } from '../../types';
import { Label, LabelProps as LabelProperties } from './label';

type HeadingProperties = LabelProperties;

export const Heading = memo(
  ({
    as = 'h3',
    children,
    className = '',
    lineHeight = Sizes.Large,
    textWeight = TextWeight.More,
    textColor = TextColors.Dark,
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
