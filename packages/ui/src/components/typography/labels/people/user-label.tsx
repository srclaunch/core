import { BasicIcons } from '@srclaunch/icons';
import { User } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Amount, Color, Orientation, TextSize } from '../../../../types';
import { Icon, IconProps } from '../../../media/icon';
import { MoreMenu, MoreMenuProps } from '../../../menus/more-menu';
import { NavigationLink } from '../../../navigation/navigation-link';
import { LinkProps } from '../../link';
import { PersonLabel, PersonLabelProps } from './person-label';

type UserLabelProps = LinkProps &
  PersonLabelProps & {
    readonly id?: User['id'];
    readonly menu?: MoreMenuProps | null;
    readonly messageIcon?: IconProps;
  };

export const UserLabel = memo(
  ({
    borderRadius = Amount.Full,
    className = '',
    to,
    id,
    menu = {},
    messageIcon = {
      name: BasicIcons.BillEnvelope,
    },
    orientation = Orientation.Horizontal,
    name,
    image,
    // size = Size.Default,
    textSize = TextSize.Default,
  }: UserLabelProps): ReactElement => {
    return (
      <NavigationLink
        orientation={orientation}
        borderRadius={borderRadius}
        className={`${className} user-label`}
        // padding={getSmallerAmount(convertSizeToAmount(size))}
        // paddingTop={getSmallerAmount(convertSizeToAmount(size))}
        // paddingBottom={getSmallerAmount(convertSizeToAmount(size))}
        to={to ?? `/people/${id}`}
        active={{
          backgroundColor: Color.Primary,
          backgroundColorOpacity: 100,
        }}
        hovered={{
          backgroundColor: Color.Primary,
          backgroundColorOpacity: 90,
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
            items={[
              {
                label: 'Send message',
                onClick: () => {
                  // console.log('sendEmail');
                },
              },
              { label: 'View Profile', to: `/people/${id}` },
            ]}
          />
        )}
      </NavigationLink>
    );
  },
);
