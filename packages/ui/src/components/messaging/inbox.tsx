import { ChatMessage } from '@srclaunch/types';
import { RouterView } from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  ContainerProps,
  Fill,
  Orientation,
} from '../../types';
import { Container } from '../layout/container';
import { ConversationList } from './conversation-list';
import { ConversationNavigation } from './conversation-navigation';
import { MessageComposer } from './message-composer';

export type InboxProps = ContainerProps;

export const Inbox = memo(
  ({ className = '', ...props }: InboxProps): ReactElement => {
    return (
      <Container
        className={`${className} inbox`}
        alignHorizontal={AlignHorizontal.Stretch}
        orientation={Orientation.Horizontal}
        alignVertical={AlignVertical.Stretch}
        fill={Fill.Both}
        {...props}
      >
        <ConversationNavigation borderRadius={Amount.More} width={160} />

        <ConversationList marginLeft={Amount.More} width={280} />

        <RouterView
          routes={[
            {
              component: () => <Container>Select a message</Container>,
              path: 'inbox',
            },
            {
              component: () => (
                <MessageComposer
                  borderRadius={Amount.Least}
                  margin={Amount.More}
                />
              ),
              path: 'new',
            },
            {
              component: () => <Container>Starred</Container>,
              path: 'starred',
            },
            {
              component: () => <Container>Sent</Container>,
              path: 'sent',
            },
            {
              component: () => <Container>Drafts</Container>,
              path: 'drafts',
            },
            {
              component: () => <Container>Trash</Container>,
              path: 'trash',
            },
            {
              component: () => <Container>Chat thread</Container>,
              path: 'conversation/:id',
            },
          ]}
        />
      </Container>
    );
  },
);
