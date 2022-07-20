import { BasicIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import { Colors, Sizes, TextColors, TextSize } from '../../../../types';
import { Icon } from '../../../media/icon';
import { Label, LabelProps } from '../../label';

type BooleanLabelProps = LabelProps & {
  readonly value: boolean;
};

export const BooleanLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    textColor = TextColors.Lighter,
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
          color={value ? Colors.Primary : Colors.Error}
          name={value ? BasicIcons.Checkmark2 : BasicIcons.Close}
          // size={Size.Smaller}
        />
        {value}
      </Label>
    );
  },
);
