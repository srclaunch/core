import { NotificationType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { AlignHorizontal } from '../../types';
import {
  NotificationLabel,
  NotificationLabelProps,
} from './notification-label';

type ErrorContainerProps = NotificationLabelProps;

export const ErrorNotification = memo(
  ({ label, showOrb = true, ...props }: ErrorContainerProps): ReactElement => {
    return (
      <NotificationLabel
        alignHorizontal={AlignHorizontal.Center}
        label={label}
        showOrb={showOrb}
        type={NotificationType.Error}
        {...props}
      />
    );
  },
);
