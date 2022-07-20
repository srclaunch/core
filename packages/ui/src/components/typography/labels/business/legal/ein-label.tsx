import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../../types';
import { Label, LabelProps } from '../../../label';

type EINLabelProps = LabelProps & {
  readonly value: string;
};

export const EINLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: EINLabelProps): ReactElement => {
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
