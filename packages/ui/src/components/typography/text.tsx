import { memo, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { getTextStyles } from '../../styles/typography';
import { getTextStatesStyles } from '../../styles/typography/state';
import {
  CommonComponentProps,
  Size,
  StateProps,
  TextAlign,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { TextColor } from '../../types/typography/color';
import { TypographyProps } from '../../types/typography/props';

type TextPropsType<E = HTMLSpanElement> = PropsWithChildren<
  CommonComponentProps<E> & TypographyProps
>;

export type TextProps<E = HTMLSpanElement> = StateProps<TextPropsType<E>> &
  TextPropsType<E>;

const Wrapper = styled.span<TextProps>`
  ${props => getTextStyles(props)};
  ${props => getTextStatesStyles(props)};
`;

export const Text = memo(
  ({
    as = 'span',
    children,
    className = '',
    description,
    lineHeight = Size.Default,
    lineWrap = true,
    textSelectable = true,
    textAlign = TextAlign.Left,
    textColor = TextColor.Default,
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    title,
    ...props
  }: TextProps): ReactElement => {
    return (
      <Wrapper
        as={as}
        className={`${className} text`}
        lineHeight={lineHeight}
        lineWrap={lineWrap}
        textSelectable={textSelectable}
        textAlign={textAlign}
        textColor={textColor}
        textOverflow={textOverflow}
        textSize={textSize}
        textWeight={textWeight}
        title={description ?? title}
        {...props}
      >
        {children}
      </Wrapper>
    );
  },
);
