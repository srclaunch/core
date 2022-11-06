import { css, SimpleInterpolation } from 'styled-components';

import { getCSSColor, getCSSMeasurement } from '../../lib';
import {
  Size,
  TextColor,
  TextDecorationStyle,
  TextOverflow,
  TextSize,
  TypographyProps,
} from '../../types';

/*
    readonly bold?: boolean;
    readonly cursor?: Cursor;
    readonly italic?: boolean;
    readonly lineHeight?: string | number;
    readonly lineWrap?: boolean;
    readonly textOverflow?: TextOverflow | string;
    readonly selectable?: boolean;
    readonly textAlign?: TextAlign | string;
    readonly textColor?: TextColor;
    readonly textDecoration?: {
      readonly color?: TextColor | string;
      readonly line?: TextDecorationLine | TextDecorationLine[];
      readonly style?: TextDecorationStyle;
      readonly thickness?: Amount | number;
    };
    readonly textSize?: TextSize | string | number;
    readonly textWeight?: TextWeight | string;
    */

export * from './state';

export const getTextStyles = ({
  bold,
  cursor,
  italic,
  lineHeight = Size.Default,
  lineWrap,
  textOverflow = TextOverflow.Ellipsis,
  textSelectable,
  textAlign,
  textColor = TextColor.Default,
  textDecorationColor,
  textDecorationPosition,
  textDecorationWidth,
  textDecorationStyle,
  textSize = TextSize.Default,
  textWeight,
}: TypographyProps): SimpleInterpolation => {
  return css`
    color: ${getCSSColor(textColor)};
    font-size: ${getCSSMeasurement(textSize)};
    line-height: ${getCSSMeasurement(lineHeight)};

    ${bold &&
    css`
      font-weight: bold;
    `};

    ${cursor &&
    css`
      cursor: ${cursor};
    `};

    ${italic &&
    css`
      font-style: italic;
    `};

    ${lineWrap &&
    lineWrap === true &&
    css`
      white-space: wrap;
    `};

    ${lineWrap !== undefined &&
    lineWrap === false &&
    css`
      white-space: nowrap;
    `};

    ${textSelectable !== undefined &&
    css`
      user-select: ${textSelectable ? 'text' : 'none'};
    `};

    ${textAlign &&
    css`
      text-align: ${textAlign};
    `};

    ${textDecorationColor &&
    css`
      text-decoration-color: ${getCSSColor(textDecorationColor)};
    `};

    ${textDecorationPosition &&
    css`
      text-decoration-line: ${textDecorationPosition};
    `};

    ${textDecorationStyle &&
    css`
      text-decoration-style: ${textDecorationStyle ??
      TextDecorationStyle.Solid};
    `};

    ${textDecorationWidth &&
    css`
      text-decoration-thickness: ${getCSSMeasurement(textDecorationWidth)};
    `};

    ${textOverflow &&
    css`
      overflow: hidden;
      text-overflow: ${textOverflow};
    `};

    ${textWeight &&
    css`
      font-weight: ${textWeight};
    `};

    transition: color 0.13s ease-in-out, font-size 0.13s ease-in-out,
      font-weight 0.13s ease-in-out, text-decoration 0.13s ease-in-out,
      text-decoration-color 0.13s ease-in-out,
      text-decoration-style 0.13s ease-in-out,
      text-decoration-thickness 0.13s ease-in-out;
  `;
};

export const TextStyles = css<TypographyProps>`
  ${props => getTextStyles(props)};
`;
