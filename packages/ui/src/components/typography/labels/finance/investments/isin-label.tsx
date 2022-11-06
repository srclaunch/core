import { memo, ReactElement } from 'react';

import { Size, TextColor, TextSize } from '../../../../../types';
import { Label, LabelProps as LabelProperties } from '../../../label';

type ISINLabelProperties = LabelProperties & {
  readonly test: string;
  readonly value: string;
};

export const ISINLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    // test = 'asdfasdf',
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    value,
    ...properties
  }: ISINLabelProperties): ReactElement => {
    // console.log(test);
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...properties}
      >
        {value}
      </Label>
    );
  },
);
