import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../../types';
import { Label, LabelProps as LabelProperties } from '../../../label';

type EthereumAddressLabelProperties = LabelProperties & {
  readonly value: string;
};

export const EthereumAddressLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...properties
  }: EthereumAddressLabelProperties): ReactElement => {
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
