import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../../types';
import { Label, LabelProps as LabelProperties } from '../../../label';

type IBANLabelProperties = LabelProperties & {
  readonly value: string;
};

export const IBANLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...properties
  }: IBANLabelProperties): ReactElement => {
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
