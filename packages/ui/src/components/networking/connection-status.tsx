import { NotificationType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { NotificationLabel } from '../notifications/notification-label';

export type ConnectionStatusProps = {
  readonly pollingInterval?: number;
  readonly successStatus?: number;
  readonly url?: string;
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
