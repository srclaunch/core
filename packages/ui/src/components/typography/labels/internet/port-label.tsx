import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type PortLabelProps = LabelProps & {
  readonly value: string;
};

export const PortLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: PortLabelProps): ReactElement => {
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
