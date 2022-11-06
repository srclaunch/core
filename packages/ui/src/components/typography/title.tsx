import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Size,
  TextColor,
  TextSize,
  TextWeight,
} from '../../types';
import { Label, LabelProps } from './label';

export type TitleProps = LabelProps;

export const Title = memo(
  ({
    as = 'h1',
    alignVertical = AlignVertical.Top,
    children,
    className = '',
    lineHeight = Size.Larger,
    textSize = TextSize.Larger,
    textColor = TextColor.Title,
    textWeight = TextWeight.Most,
    ...props
  }: TitleProps): ReactElement => {
    return (
      <Label
        alignVertical={alignVertical}
        as={as}
        className={`${className} title`}
        textColor={textColor}
        lineHeight={lineHeight}
        textSize={textSize}
        textWeight={textWeight}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
