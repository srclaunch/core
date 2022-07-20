import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type CityLabelProps = LabelProps & {
  readonly value: string;
};

export const CityLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: CityLabelProps): ReactElement => {
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
