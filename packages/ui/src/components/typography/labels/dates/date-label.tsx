import { Date } from '@srclaunch/types';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { memo, ReactElement } from 'react';

import { TextColor, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type DateLabelProps = LabelProps & {
  readonly defaultValue?: Date;
  readonly format?: DateTimeFormatOptions;
  readonly value: Date;
};

export const DateLabel = memo(
  ({
    className = '',
    format = DateTime.DATE_MED,
    icon,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DateLabelProps): ReactElement => {
    return (
      <Label
        className={`${className} date-label`}
        icon={icon}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {DateTime.fromISO(value).toLocaleString(format)}
      </Label>
    );
  },
);
