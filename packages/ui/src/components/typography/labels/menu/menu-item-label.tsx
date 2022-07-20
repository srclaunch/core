import { ModelProps } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../types';
import { Label, LabelProps } from '../../label';

type MenuItemLabelProps = LabelProps & {
  readonly fieldName?: string;
  readonly model?: ModelProps;
  readonly value: string;
};

export const MenuItemLabel = memo(
  ({
    fieldName,
    icon,
    lineHeight = Sizes.Default,
    model,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: MenuItemLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {!fieldName || !model
          ? value
          : // @ts-ignore
            model.fields[fieldName]?.items?.find(i => i.value === value)
              ?.label ?? value}
      </Label>
    );
  },
);
