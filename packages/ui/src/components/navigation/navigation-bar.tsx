import { memo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Orientation,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { UserMenu } from '../user/user-menu';

export type NavigationBarProps = ContainerProps & {
  readonly logo?: ReactElement;
};

export const NavigationBar = memo(
  ({
    alignment = {},
    background = {},
    border = {},
    logo,
    padding = {},
  }: NavigationBarProps) => {
    const navigate = useNavigate();

    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        background={{ color: BackgroundColors.NavigationBar, ...background }}
        border={{
          bottom: {
            color: BorderColors.Dark,
            style: BorderStyle.Solid,
            width: 1,
          },
          ...border,
        }}
        padding={{
          bottom: Amount.Default,
          left: Amount.More,
          right: Amount.Most,
          top: Amount.Default,
          ...padding,
        }}
      >
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
        >
          {logo}
        </Container>

        <Spacer />

        <Container size={{ width: 200 }}>
          <UserMenu onLogoutSuccess={() => navigate('/login')} />
        </Container>
      </Container>
    );
  },
);
