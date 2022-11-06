import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../types';
import { Label, LabelProps } from './label';

export type ParagraphProps = LabelProps;

export const Paragraph = memo(
  ({
    as = 'p',
    children,
    className = '',
    lineHeight = Size.Default,
    textColor = TextColor.Paragraph,
    textSize = TextSize.Default,
    ...props
  }: ParagraphProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} paragraph`}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
