import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  Color,
  Size,
  // Size,
  TextAlign,
  TextColor,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Label } from '../typography/label';

export const ProgressMeter = memo(
  ({
    amount,
    backgroundColor = BackgroundColor.Primary,
    borderRadius = Amount.Less,
    children,
    label,
    // size = {
    //   height: Size.Default,
    // },
    total,
    ...props
  }: ContainerProps<{
    readonly amount?: number;
    readonly color?: Color;
    readonly label?: string;
    readonly size?: Size;
    readonly total?: number;
  }>): ReactElement => {
    const progressPercent =
      amount === 0
        ? 0
        : Number.parseInt((((amount ?? 0) / (total ?? 0)) * 100).toFixed(0));

    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        {...props}
      >
        <Container
          backgroundColor={Color.Primary}
          borderRadius={borderRadius}
          // shadow={shadow}
          width={`${progressPercent}%`}
        >
          {children}

          {label && (
            <Label
              textAlign={TextAlign.Center}
              textSize={TextSize.Larger}
              textColor={TextColor.Darkest}
              textWeight={TextWeight.More}
            >
              {label}
            </Label>
          )}
        </Container>
      </Container>
    );
  },
);
