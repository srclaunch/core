import { BasicIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import { Color, Size, TextColor, TextSize } from '../../../../types';
import { Icon } from '../../../media/icon';
import { Label, LabelProps } from '../../label';

type BooleanLabelProps = LabelProps & {
  readonly value: boolean;
};

export const BooleanLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: BooleanLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        <Icon
          color={value ? Color.Primary : Color.Error}
          name={value ? BasicIcons.Checkmark2 : BasicIcons.Close}
          // size={Size.Smaller}
        />
        {value}
      </Label>
    );
  },
);
