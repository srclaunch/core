import { Image as ImageProps } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { getSmallerAmount } from '../../../../lib/proportions/amount';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import {
  AlignVertical,
  Amount,
  Orientation,
  Size,
  TextSize,
  TextWeight,
} from '../../../../types';
import { Container } from '../../../layout/container';
import { Image } from '../../../media/image';
import { Label, LabelProps } from '../../label';

export type PersonLabelProps = LabelProps & {
  readonly image?: ImageProps;
  readonly name?: string;
};

export const PersonLabel = memo(
  ({
    image,
    name,
    // size = Size.Default,
    textSize = TextSize.Large,
    ...props
  }: PersonLabelProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
        {...props}
      >
        <Image
          borderRadius={{ all: Amount.All }}
          // margin={{ right: getSmallerAmount(convertSizeToAmount(size))}}
          path={image?.path}
          url={image?.url}
          // size={size}
        />

        <Label
          // lineHeight={getSmallerAmount(convertSizeToAmount(size))}
          textWeight={TextWeight.More}
          textSize={textSize}
        >
          {name}
        </Label>
      </Container>
    );
  },
);
