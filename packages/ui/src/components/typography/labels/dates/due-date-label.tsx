import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../types';
// import { getDueDateLabel } from '../../../../lib/dates/labels';
import { Label, LabelProps } from '../../label';

type DueDateLabelProps = LabelProps & {
  readonly value: string;
};

export const DueDateLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DueDateLabelProps): ReactElement => {
    if (!value[0] && !value[1] && !value[2] && !value[3] && !value[4])
      return <>Invalid data</>;

    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {/*{getDueDateLabel(value)}*/}
      </Label>
    );
  },
);
