import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  BorderColor,
  BorderStyle,
  ContainerProps,
  Overflow,
  Shadow,
} from '../../types';
import { Container } from '../layout/container';
import { Scrollable } from '../layout/scrollable';
import { NavigationLink } from '../navigation/navigation-link';
import { MessagePreview } from './message-preview';

type ConversationListProps = ContainerProps;

export const ConversationList = memo(
  ({
    backgroundColor = BackgroundColor.Light,
    className = '',
    borderRadius = Amount.Least,
    padding = Amount.Less,
    width = 350,
    ...props
  }: ConversationListProps): ReactElement => {
    const items = Array.from({ length: 5 }).fill(0);
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} conversation-list`}
        shadow={Shadow.Low}
        width={width}
        {...props}
      >
        <Scrollable overflow={Overflow.ScrollVertical} padding={padding}>
          {items.map((_, index) => {
            return (
              <NavigationLink to={`conversation/${index}`}>
                <MessagePreview
                  backgroundColor={BackgroundColor.Lightest}
                  body="Lorem ipsum"
                  borderBottomColor={
                    index !== items.length - 1
                      ? BorderColor.Light
                      : BorderColor.Default
                  }
                  date={new Date().toISOString()}
                  marginBottom={Amount.Least}
                  sender={{
                    id: '0',
                    name: 'Yippy James',
                  }}
                  subject="Lorem ipsum "
                />
              </NavigationLink>
            );
          })}
        </Scrollable>
      </Container>
    );
  },
);
