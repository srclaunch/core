import { NotificationType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { NotificationLabel } from '../notifications/NotificationLabel';

export type ConnectionStatusProps = {
  readonly pollingInterval?: number;
  readonly url?: string;
  readonly successStatus?: number;
};

export const ConnectionStatus = memo(
  ({ ...props }: ConnectionStatusProps): ReactElement => {
    return (
      <NotificationLabel
        type={NotificationType.Success}
        label={'Connected'}
        {...props}
      />
    );
  },
);
