import { memo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Orientation,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { UserMenu } from '../user/user-menu';

export type NavigationBarProps = ContainerProps<{
  readonly logo?: ReactElement;
}>;

export const NavigationBar = memo(
  ({
    orientation = Orientation.Horizontal,
    alignVertical = AlignVertical.Center,
    backgroundColor = BackgroundColor.NavigationBar,
    borderBottomColor = BorderColor.Dark,
    logo,
    paddingLeft = Amount.More,
    paddingRight = Amount.More,
    paddingTop = Amount.Default,
    paddingBottom = Amount.Default,
  }: NavigationBarProps) => {
    const navigate = useNavigate();

    return (
      <Container
        alignVertical={alignVertical}
        orientation={orientation}
        backgroundColor={backgroundColor}
        borderBottomColor={borderBottomColor}
        paddingBottom={paddingBottom}
        paddingTop={paddingTop}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
      >
        <Container
          orientation={Orientation.Horizontal}
          alignVertical={AlignVertical.Center}
        >
          {logo}
        </Container>

        <Spacer />

        <Container width={200}>
          <UserMenu onLogoutSuccess={() => navigate('/login')} />
        </Container>
      </Container>
    );
  },
);
