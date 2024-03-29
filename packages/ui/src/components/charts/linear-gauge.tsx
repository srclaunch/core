import { memo, ReactElement } from 'react';

import { FormatterProps, formatValue } from '../../lib/data/format';
import {
  BackgroundColor,
  Orientation,
  Size,
  TextAlign,
  TextColor,
  TextSize,
  TextWeight,
} from '../../types';
import { Container } from '../layout/container';
import { Label } from '../typography/label';

export const LinearGauge = memo(
  ({
    amount,
    // color,
    formatter,
    showTicks = true,
    showTickLabels = true,
    showValue = true,
    tickCount = 5,
    total,
  }: {
    readonly amount: number;
    // readonly color: Color;
    readonly formatter?: FormatterProps;
    readonly label?: string;
    readonly showTickLabels?: boolean;
    readonly showTicks?: boolean;
    readonly showValue?: boolean;
    readonly size?: Size;
    readonly tickCount?: number;
    readonly total: number;
  }): ReactElement => {
    const progressPercent =
      amount === 0 ? 0 : Number.parseInt(((amount / total) * 100).toFixed(0));
    const tickPercent = total / tickCount;

    return (
      <Container>
        {showTicks && (
          <Container orientation={Orientation.Horizontal}>
            {showValue && (
              <Container
                // border={{
                //   left: {
                //     color,
                //     style: BorderStyle.Solid,
                //     width: 3,
                //   },
                // }}
                height={Size.Small}
                style={{
                  left: `calc(${progressPercent}% - 3px)`,
                  position: 'absolute',
                  top: '-3px',
                }}
              >
                <Label
                  lineHeight={Size.Smallest}
                  textAlign={TextAlign.Center}
                  // textColor={color}
                  textSize={TextSize.Small}
                  textWeight={TextWeight.More}
                  style={{
                    background: `linear-gradient(
                      45deg, transparent 20%, 
                      rgba(var(--bg-color-darker-rgb), 0.5) 80%, 
                      transparent 20%
                    )`,
                    position: 'absolute',
                    top: 19,
                    transform: 'translateX(-50%)',
                    zIndex: 5,
                  }}
                >
                  {formatter ? formatValue(amount, formatter) : amount}
                </Label>
              </Container>
            )}

            {[tickCount].fill(0).map((_, index) => {
              const tickValue = tickPercent * index;
              const tickValueFormatted = formatter
                ? formatValue(tickValue, formatter)
                : tickValue;

              return (
                <Container
                  key={index}
                  // border={{
                  //   left: {
                  //     color:
                  //       amount >= tickValue ? color : BorderColor.Lightest,
                  //     style: BorderStyle.Solid,
                  //     width: 1,
                  //   },
                  // }}
                  height={6}
                >
                  {showTickLabels && (
                    <Label
                      textAlign={TextAlign.Left}
                      // textColor={amount >= tickValue ? color : TextColor.Dark}
                      textSize={TextSize.Smallest}
                      textWeight={TextWeight.More}
                      style={{
                        position: 'absolute',
                        transform: 'translateX(calc(100% / 2 - 100%))',
                      }}
                    >
                      {tickValueFormatted}
                    </Label>
                  )}
                </Container>
              );
            })}

            <Container
              // border={{
              //   right: {
              //     // color: amount >= total ? color : BorderColor.Lightest,
              //     style: BorderStyle.Solid,
              //     width: 1,
              //   },
              // }}
              height={6}
              style={{
                position: 'absolute',
                right: 0,
              }}
            >
              {showTickLabels && (
                <Label
                  textAlign={TextAlign.Right}
                  textColor={TextColor.Dark}
                  textSize={TextSize.Small}
                  textWeight={TextWeight.More}
                >
                  {formatter ? formatValue(total, formatter) : total}
                </Label>
              )}
            </Container>
          </Container>
        )}

        <Container backgroundColor={BackgroundColor.Lightest} height={1}>
          <Container
            // background={{
            //   color,
            // }}\
            height={1}
            width={`${progressPercent}%`}
          />
        </Container>

        {/*<Container*/}
        {/*  alignContent={Align.SpaceBetween}*/}
        {/*  orientation={Orientation.Horizontal}*/}
        {/*  padding={Amount.Least}*/}
        {/*>*/}
        {/*  <Text*/}
        {/*    alignText={Align.Left}*/}
        {/*    textSize={TextSize.Smaller}*/}
        {/*    textWeight={TextWeight.More}*/}
        {/*  >*/}
        {/*    {formatter ? formatValue(0, formatter) : 0}*/}
        {/*  </Text>*/}

        {/*  <Text*/}
        {/*    alignText={Align.Right}*/}
        {/*    textSize={TextSize.Smaller}*/}
        {/*    textWeight={TextWeight.More}*/}
        {/*  >*/}
        {/*    {formatter ? formatValue(total, formatter) : amount}*/}
        {/*  </Text>*/}
        {/*</Container>*/}
      </Container>
    );
  },
);
