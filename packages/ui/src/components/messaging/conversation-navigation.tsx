import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AlignVertical,
  Amount,
  BackgroundColor,
  ContainerProps,
  Fill,
  Size,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/button';
import { Container } from '../layout/container';
import { NavigationMenu } from '../navigation/navigation-menu';

type ConversationNavigationProps = ContainerProps;

export const ConversationNavigation = memo(
  ({
    borderRadius = Amount.Least,
    ...props
  }: ConversationNavigationProps): ReactElement => {
    const navigate = useNavigate();

    return (
      <Container {...props}>
        <Button
          alignVertical={AlignVertical.Center}
          borderRadius={borderRadius}
          onClick={() => navigate('/messages/new')}
          icon={{
            name: DualLightIcons.AddCircle,
            size: Size.Small,
          }}
          lineHeight={Size.Large}
          marginBottom={Amount.Default}
          type={ButtonType.Primary}
        >
          New Message
        </Button>

        <NavigationMenu
          backgroundColor={BackgroundColor.Transparent}
          items={[
            {
              icon: {
                name: DualLightIcons.Inbox,
                size: Size.Small,
              },
              label: 'Inbox',
              to: '/messages/inbox',
            },
            {
              icon: {
                name: DualLightIcons.Star,
                size: Size.Small,
              },
              label: 'Starred',
              to: '/messages/starred',
            },
            {
              icon: {
                name: DualLightIcons.Send,
                size: Size.Small,
              },
              label: 'Sent',
              to: '/messages/sent',
            },
            {
              icon: {
                name: DualLightIcons.Note,
                size: Size.Small,
              },
              label: 'Drafts',
              to: '/messages/drafts',
            },
            {
              icon: {
                name: DualLightIcons.Trash,
                size: Size.Small,
              },
              label: 'Trash',
              to: '/messages/trash',
            },
          ]}
          padding={Amount.None}
          fill={Fill.Vertical}
        />
      </Container>
    );
  },
);
