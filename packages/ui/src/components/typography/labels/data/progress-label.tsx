import { memo, ReactElement } from 'react';

import { Color, Size, TextColor, TextSize } from '../../../../types';
import { ProgressMeter } from '../../../charts/progress-meter';
import { Label, LabelProps } from '../../label';

type ProgressLabelProps = LabelProps & {
  readonly color?: Color;
  readonly value: readonly number[];
};

export const ProgressLabel = memo(
  ({
    color,
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: ProgressLabelProps): ReactElement => {
    const spent = value[1];
    const total = value[2];

    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        <ProgressMeter amount={spent} background={{ color }} total={total} />
      </Label>
    );
  },
);
