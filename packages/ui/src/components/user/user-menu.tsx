import { BasicIcons } from '@srclaunch/icons';
import {
  logout,
  RootState,
  useDispatch,
  useSelector,
} from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect, useState } from 'react';

import { Color, Size, TextColor } from '../../types';
import { MenuButton, MenuButtonProps } from '../forms/buttons/menu-button';
import { ErrorLabel } from '../typography/labels/errors/error-label';

type UserMenuProperties = MenuButtonProps & {
  readonly onLogoutSuccess?: () => unknown;
};

export const UserMenu = memo(
  ({ onLogoutSuccess, state }: UserMenuProperties): ReactElement => {
    const [loggingOut, setLoggingOut] = useState(false);
    const dispatch = useDispatch();

    const attributes = useSelector(
      (state: RootState) => state.user.details.attributes,
    );
    const loggedIn = useSelector(
      (state: RootState) => state.user.authentication.state.loggedIn,
    );

    useEffect(() => {
      if (loggingOut && !loggedIn && onLogoutSuccess) onLogoutSuccess();
    }, [loggedIn]);

    if (!loggedIn && !state?.authenticated) {
      return <ErrorLabel>Not logged in</ErrorLabel>;
    }

    return (
      <MenuButton
        items={[
          {
            icon: {
              name: BasicIcons.GearCog,
              size: Size.Smaller,
            },
            label: 'Settings',
            to: '/settings',
          },
          {
            events: {
              mouse: {
                onClick: () => {
                  setLoggingOut(true);
                  dispatch(logout());
                },
              },
            },
            icon: {
              color: Color.Error,
              name: BasicIcons.Exit,
              size: Size.Smaller,
            },
            label: 'Logout',

            textColor: TextColor.Error,
          },
        ]}
        label={
          loggedIn
            ? `${attributes?.given_name} ${attributes?.family_name}`
            : 'Not Authenticated'
        }
      />
    );
  },
);
