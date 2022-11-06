import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type LongTextLabelProps = LabelProps & {
  readonly value: string;
};

export const LongTextLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: LongTextLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {value}
      </Label>
    );
  },
);
