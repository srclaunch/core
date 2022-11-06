import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../types';
// import moment from 'moment';
import { Label, LabelProps } from '../../label';

type DateTimeLabelProps = LabelProps & {
  readonly value: string;
};

export const DateTimeLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DateTimeLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {/* {moment(value).format('MMM Do')} */}
      </Label>
    );
  },
);
