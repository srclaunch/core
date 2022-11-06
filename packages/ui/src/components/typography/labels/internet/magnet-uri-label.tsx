import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type MagnetURILabelProps = LabelProps & {
  readonly value: string;
};

export const MagnetURILabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: MagnetURILabelProps): ReactElement => {
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
