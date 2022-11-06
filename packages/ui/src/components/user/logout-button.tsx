import { BasicIcons } from '@srclaunch/icons';
import {
  logout,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect } from 'react';

import { TextColor, TextSize } from '../../types';
import { Button, ButtonProps } from '../forms/buttons/button';
import { Icon } from '../media/icon';
import { Label } from '../typography/label';

export type LogoutButtonProps = ButtonProps & {
  readonly label?: string;
  readonly onLogoutSuccess?: () => unknown;
  readonly showArrow?: boolean;
  readonly showUnderline?: boolean;
};

export const LogoutButton = memo(
  ({
    icon,
    onLogoutSuccess,
    label,
    showArrow = false,
    textColor = TextColor.Error,
    ...props
  }: LogoutButtonProps): ReactElement => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(
      (state: RootState) => state.authentication.loggedIn,
    );

    useEffect(() => {
      if (!loggedIn && onLogoutSuccess) onLogoutSuccess();
    }, [loggedIn]);

    return (
      <Button
        events={{
          mouse: {
            onClick: () => dispatch(logout()),
          },
        }}
        {...props}
      >
        {icon && <Icon {...icon} />}

        <Label textColor={textColor} textSize={TextSize.Small}>
          {label ?? 'Logout'}
        </Label>

        {showArrow && (
          <Icon
            color={textColor}
            name={BasicIcons.ChevronRight}
            // size={Size.Small}
          />
        )}
      </Button>
    );
  },
);
