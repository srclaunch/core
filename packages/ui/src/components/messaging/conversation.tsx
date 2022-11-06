import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  BorderColor,
  BorderStyle,
  ContainerProps,
} from '../../types';
import { Container } from '../layout/container';
import { MessagePreview } from './message-preview';

type ConversationProps = ContainerProps;

export const Conversation = memo(
  ({
    backgroundColor = BackgroundColor.Lightest,
    borderRadius = Amount.Less,
    className = '',
    width = 350,
  }: ConversationProps): ReactElement => {
    const items = Array.from({ length: 5 }).fill(0);
    return (
      <Container
        borderRadius={borderRadius}
        className={`${className} conversation-list`}
        width={width}
      >
        {items.map((_, index) => {
          return (
            <MessagePreview
              backgroundColor={backgroundColor}
              body="Lorem ipsum "
              borderBottomColor={BorderColor.Light}
              date={new Date().toISOString()}
              sender={{
                id: '0',
                name: 'Yippy James',
              }}
              subject="Lorem ipsum "
            />
          );
        })}
      </Container>
    );
  },
);
