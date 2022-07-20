import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../../../../types';
import { Label, LabelProps as LabelProperties } from '../../../label';

type ISINLabelProperties = LabelProperties & {
  readonly test: string;
  readonly value: string;
};

export const ISINLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
    // test = 'asdfasdf',
    textColor = TextColors.Lighter,
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
