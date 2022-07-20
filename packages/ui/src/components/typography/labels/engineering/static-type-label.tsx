import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type StaticTypeLabelProps = LabelProps & {
  readonly value?: ReactElement;
};

export const StaticTypeLabel = memo(
  ({
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: StaticTypeLabelProps): ReactElement => {
    return (
      <Label
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
