import { ModelProps } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../types';
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
    lineHeight = Size.Default,
    model,
    textColor = TextColor.Lighter,
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
            model.fields[fieldName]?.items?.find(index => index.value === value)
              ?.label ?? value}
      </Label>
    );
  },
);
