import { memo, ReactElement } from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { duotoneDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  Amount,
  DepthShadow,
  Overflow,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { TextProps } from '../typography/text';

type CodeViewProps = ContainerProps &
  TextProps & {
    readonly value: string;
  };

export const CodeView = memo(
  ({
    alignment = {},
    borderRadius = {},
    lineHeight = Sizes.Default,
    textSize = TextSize.Default,
    value,
    ...props
  }: CodeViewProps): ReactElement => {
    return (
      <Container
        alignment={{ overflow: Overflow.Hidden, ...alignment }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        shadow={DepthShadow.Low}
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
