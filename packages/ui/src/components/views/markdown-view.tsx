import { memo, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownViewProperties = {
  readonly content: string;
};

export const MarkdownView = memo(
  ({ content }: MarkdownViewProperties): ReactElement => {
    return <ReactMarkdown>{content}</ReactMarkdown>;
  },
);
