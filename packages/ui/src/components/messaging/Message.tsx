import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Container } from '../layout/container';

export const Message = memo(
  ({ body, subject, sender }: ChatMessage): ReactElement => {
    return <Container></Container>;
  },
);
