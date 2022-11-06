import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../types';
import { Label, LabelProps } from './label';

type SmallProps = LabelProps;

export const Small = memo(
  ({
    as = 'small',
    className = '',
    children,
    lineHeight = Size.Small,
    textColor = TextColor.Light,
    textSize = TextSize.Small,
    ...props
  }: SmallProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} small`}
        lineHeight={lineHeight}
        lineWrap={true}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
