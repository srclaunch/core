import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../../types';
import { Label, LabelProps as LabelProperties } from '../../../label';

type BankIDCodeLabelProperties = LabelProperties & {
  readonly value: string;
};

export const BankIDCodeLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...properties
  }: BankIDCodeLabelProperties): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...properties}
      >
        {value}
      </Label>
    );
  },
);
