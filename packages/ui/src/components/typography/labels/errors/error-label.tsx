import { BasicIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Color,
  Orientation,
  Size,
  TextColor,
  TextOverflow,
  TextSize,
} from '../../../../types';
import { Label, LabelProps } from '../../label';

export type ErrorLabelProps = LabelProps;

export const ErrorLabel = memo(
  ({
    alignHorizontal = AlignHorizontal.Left,
    alignVertical = AlignVertical.Center,
    orientation = Orientation.Horizontal,
    children,
    className = '',
    icon = {},
    textColor = TextColor.Error,
    textSize = TextSize.Small,
    ...props
  }: ErrorLabelProps): ReactElement => {
    return (
      <Label
        alignHorizontal={alignHorizontal}
        alignVertical={alignVertical}
        orientation={orientation}
        className={`${className} error-label`}
        icon={{
          color: Color.Error,
          name: BasicIcons.Alert,
          size: Size.Smaller,
          ...icon,
        }}
        textColor={textColor}
        textOverflow={TextOverflow.Ellipsis}
        textSize={textSize}
        title={children}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
