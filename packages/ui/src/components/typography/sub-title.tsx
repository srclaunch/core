import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './label';

type SubTitleProps = LabelProps;

export const SubTitle = memo(
  ({
    as = 'h2',
    children,
    className = '',
    lineHeight = Size.Default,
    textSize = TextSize.Large,
    textColor = TextColor.Light,
    textWeight = TextWeight.More,
    ...props
  }: SubTitleProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} title`}
        lineHeight={lineHeight}
        lineWrap={false}
        textWeight={textWeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children ?? ''}
      </Label>
    );
  },
);
