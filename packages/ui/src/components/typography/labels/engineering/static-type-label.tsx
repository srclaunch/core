import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type StaticTypeLabelProps = LabelProps & {
  readonly value?: ReactElement;
};

export const StaticTypeLabel = memo(
  ({
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
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
