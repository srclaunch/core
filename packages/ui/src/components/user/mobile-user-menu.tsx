// import { useDispatch } from '@srclaunch/web-app-state';

import { Container } from '../layout/container';

export const MobileUserMenu = () => {
  // const dispatch = useDispatch();

  return (
    <Container
    // orientation={Orientation.Horizontal}
    >
      <ul>
        <li>
          {/* <NavLink to="/settings" activeClassName="current">
            <Icon name={BasicIcons.GearCog} />
            <span>Settings</span>
          </NavLink> */}
        </li>
        <li>
          {/* <button
            onClick={() => dispatch(logout())}
            onKeyPress={key => {
              if (key === 'Enter') {
                dispatch(logout());
              }
            }}
          >
            <Icon name={Icons.Exit} />
            <span>Logout</span>
          </button> */}
        </li>
      </ul>
    </Container>
  );
};

export default MobileUserMenu;
