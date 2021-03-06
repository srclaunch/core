import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Fill,
  Sizes,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/button';
import { Container, ContainerProps } from '../layout/container';
import { NavigationMenu } from '../navigation/navigation-menu';

type ConversationNavigationProps = ContainerProps;

export const ConversationNavigation = memo(
  ({ ...props }: ConversationNavigationProps): ReactElement => {
    const navigate = useNavigate();

    return (
      <Container {...props}>
        <Button
          alignment={{
            vertical: AlignVertical.Center,
          }}
          borderRadius={{ all: Amount.Least }}
          events={{
            mouse: {
              onClick: () => navigate('/messages/new'),
            },
          }}
          icon={{
            name: DualLightIcons.AddCircle,
            size: {
              height: Sizes.Small,
              width: Sizes.Small,
            },
          }}
          lineHeight={Sizes.Large}
          margin={{
            bottom: Amount.Default,
          }}
          type={ButtonType.Primary}
        >
          New Message
        </Button>

        <NavigationMenu
          background={{ color: BackgroundColors.Transparent }}
          menu={[
            {
              icon: {
                name: DualLightIcons.Inbox,
                size: {
                  height: Sizes.Small,
                  width: Sizes.Small,
                },
              },
              label: 'Inbox',
              to: '/messages/inbox',
            },
            {
              icon: {
                name: DualLightIcons.Star,
                size: {
                  height: Sizes.Small,
                  width: Sizes.Small,
                },
              },
              label: 'Starred',
              to: '/messages/starred',
            },
            {
              icon: {
                name: DualLightIcons.Send,
                size: {
                  height: Sizes.Small,
                  width: Sizes.Small,
                },
              },
              label: 'Sent',
              to: '/messages/sent',
            },
            {
              icon: {
                name: DualLightIcons.Note,
                size: {
                  height: Sizes.Small,
                  width: Sizes.Small,
                },
              },
              label: 'Drafts',
              to: '/messages/drafts',
            },
            {
              icon: {
                name: DualLightIcons.Trash,
                size: {
                  height: Sizes.Small,
                  width: Sizes.Small,
                },
              },
              label: 'Trash',
              to: '/messages/trash',
            },
          ]}
          padding={{
            all: Amount.None,
          }}
          size={{
            fill: Fill.Vertical,
          }}
        />
      </Container>
    );
  },
);
