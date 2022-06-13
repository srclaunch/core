import {
  Amount,
  BackgroundColors,
  Container,
  ConversationList,
  ConversationNavigation,
  Inbox,
  MessageComposer,
  Orientation,
  Workspace,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';

// import WebApp from '../layouts/WebApp';
import { WebApp } from '../../../layouts/WebApp';

export const Messages = memo((): ReactElement => {
  return (
    <Workspace header={{ title: 'Messages' }} layout={WebApp} title="Messages">
      <Inbox
        background={{
          color: BackgroundColors.Darker,
        }}
      />
    </Workspace>
  );
});
