import { memo, ReactElement } from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { duotoneDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  Amount,
  ContainerProps,
  Overflow,
  Shadow,
  Size,
  TextColor,
  TextSize,
} from '../../types';
import { Container } from '../layout/container';
import { TextProps } from '../typography/text';

type CodeViewProps = ContainerProps<
  TextProps & {
    readonly value: string;
  }
>;

export const CodeView = memo(
  ({
    borderRadius = Amount.Least,
    overflow = Overflow.Hidden,
    lineHeight = Size.Default,
    textSize = TextSize.Default,
    value,
    ...props
  }: CodeViewProps): ReactElement => {
    return (
      <Container
        overflow={overflow}
        borderRadius={borderRadius}
        shadow={Shadow.Low}
        {...props}
      >
        <SyntaxHighlighter
          customStyle={{
            borderRadius: 'inherit',
            fontSize: textSize,
            margin: 0,
          }}
          language="tsx"
          showLineNumbers={true}
          style={style}
        >
          {value}
        </SyntaxHighlighter>
      </Container>
    );
  },
);
