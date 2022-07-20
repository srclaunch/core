import { BasicIcons } from '@srclaunch/icons';
import { User } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Orientation,
  TextSize,
} from '../../../../types';
import { Icon, IconProps } from '../../../media/icon';
import { MoreMenu, MoreMenuProps } from '../../../menus/more-menu';
import { NavigationLink } from '../../../navigation/navigation-link';
import { PersonLabel, PersonLabelProps } from './person-label';

type UserLabelProps = PersonLabelProps & {
  readonly menu?: MoreMenuProps | null;
  readonly id?: User['id'];
  readonly to?: string;
  readonly messageIcon?: IconProps;
};

export const UserLabel = memo(
  ({
    events = {},
    className = '',
    to,
    id,
    menu = {},
    messageIcon = {
      name: BasicIcons.BillEnvelope,
    },
    name,
    image,
    // size = Sizes.Default,
    textSize = TextSize.Default,
  }: UserLabelProps): ReactElement => {
    return (
      <NavigationLink
        alignment={{
          orientation: Orientation.Horizontal,
        }}
        borderRadius={{ all: Amount.All }}
        className={`${className} user-label`}
        // padding={getSmallerAmount(convertSizeToAmount(size))}
        // paddingTop={getSmallerAmount(convertSizeToAmount(size))}
        // paddingBottom={getSmallerAmount(convertSizeToAmount(size))}
        to={to ?? `/people/${id}`}
        states={{
          active: {
            background: {
              color: BackgroundColors.Primary,
              opacity: 100,
            },
          },
          hovered: {
            background: {
              color: BackgroundColors.Primary,
              opacity: 90,
            },
          },
        }}
        style={{
          position: 'relative',
          zIndex: 5,
        }}
      >
        <PersonLabel
          name={name}
          image={image}
          // lineHeight={size}
          // size={size}
          textSize={textSize}
        />

        {messageIcon && (
          <Icon
            //  size={size}
            {...messageIcon}
          />
        )}

        {menu && (
          <MoreMenu
            menu={[
              {
                events: {
                  mouse: {
                    onClick: () => {
                      console.log('sendEmail');
                    },
                  },
                },
                label: 'Send message',
              },
              { label: 'View Profile', to: `/people/${id}` },
            ]}
          />
        )}
      </NavigationLink>
    );
  },
);
