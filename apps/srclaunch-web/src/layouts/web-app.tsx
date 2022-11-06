import { BasicIcons } from '@srclaunch/icons';
import {
  BackgroundColor,
  Container,
  Fill,
  NavigationBar,
  NavigationMenu,
  Orientation,
  Size,
} from '@srclaunch/ui';
import { memo, PropsWithChildren, ReactElement } from 'react';

/* {
 <Workspace>
          <WorkspaceFooter>
            <FooterLinks>
              <Link
                label="Get Help"
                name="Workspace Footer > Get Help"
                to="https://srclaunch.com/help"
                target="_blank"
                rel="noreferrer"
              />
              <i>&bull;</i>
              <Link
                label="Privacy Policy"
                name="Workspace Footer > Privacy Policy"
                to="https://srclaunch.com/privacy"
                target="_blank"
                rel="noreferrer"
              />
            </FooterLinks>
            <Trademark>
              <Small text="&copy; 2021 SrcLaunch LLC" />
            </Trademark>
          </WorkspaceFooter>
        </Workspace> 
}*/

export const WebApp = memo(({ children }: PropsWithChildren): ReactElement => {
  return (
    <Container fill={Fill.Both} orientation={Orientation.Vertical}>
      <NavigationBar logo={<>SrcLaunch</>} />

      <Container fill={Fill.Both} orientation={Orientation.Horizontal}>
        <NavigationMenu
          backgroundColor={BackgroundColor.Lighter}
          // itemProps={{
          //   active: {
          //     backgroundColor: BackgroundColor.Primary,
          //     textColor: TextColor.White,
          //   },
          //   hover: {
          //     backgroundColor: BackgroundColor.Darker,
          //     textColor: TextColor.White,
          //   },
          // }}

          matchExactPath={true}
          items={[
            {
              icon: {
                name: BasicIcons.Dashboard,
                size: Size.Smaller,
              },
              label: 'Overview',
              to: '/',
            },
            {
              icon: {
                name: BasicIcons.Dashboard,
                size: Size.Smaller,
              },
              label: 'Organizations',
              to: '/organizations',
            },
            {
              icon: {
                name: BasicIcons.Dashboard,
                size: Size.Smaller,
              },
              label: 'Workspaces',
              to: '/workspaces',
            },
            {
              icon: {
                name: BasicIcons.Dashboard,
                size: Size.Smaller,
              },
              label: 'Projects',
              to: '/projects',
            },
            // {
            //   icon: {
            //     name: DualLightIcons.Messages,
            //     size: {
            //       height: Size.Small,
            //       width: Size.Small,
            //     },
            //   },
            //   label: 'Messages',
            //   to: '/messages',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Building,
            //     size: {
            //       height: Size.Small,
            //       width: Size.Small,
            //     },
            //   },
            //   label: 'Properties',
            //   to: '/properties',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Group,
            //     size: {
            //       height: Size.Small,
            //       width: Size.Small,
            //     },
            //   },
            //   label: 'Tenants',
            //   to: '/tenants',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Tool,
            //     size: {
            //       height: Size.Small,
            //       width: Size.Small,
            //     },
            //   },
            //   label: 'Service Requests',
            //   to: '/service-requests',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Document,
            //     size: {
            //       height: Size.Small,
            //       width: Size.Small,
            //     },
            //   },
            //   label: 'Documents',
            //   to: '/documents',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Gift,
            //     size: Size.Small,
            //   },
            //   label: 'Rewards',
            //   to: '/rewards',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Growth,
            //     size: {
            //       height: Size.Small,
            //       width: Size.Small,
            //     },
            //   },
            //   label: 'Analytics',
            //   to: '/analytics',
            // },
            // {
            //   icon: {
            //     name: DualLightIcons.Settings,
            //     size: Size.Small,
            //   },
            //   label: 'Settings',
            //   to: '/settings',
            // },
          ]}
          width={260}
        />

        <Container fill={Fill.Both}>{children}</Container>
      </Container>
    </Container>
  );
});

// const WorkspaceFooter = styled.div`
//   bottom: 0;
//   left: 0;
//   padding: 10px 15px;
//   right: 0;
//   text-align: center;
//   width: 100%;

//   &:after {
//     clear: both;
//     content: '';
//     display: block;
//   }
// `;

// const Trademark = styled.div`
//   color: #aaa;
//   font-size: 12px;
//   line-height: 18px;
// `;

// const FooterLinks = styled.div`
//   line-height: 18px;
//   margin: 50px 0 10px 0;

//   a {
//     /* color: #9b9b9b; */
//     display: inline-block;
//     font-size: 13px;
//     font-weight: 600;
//     line-height: 18px;
//     vertical-align: top;
//     text-decoration: none;

//     &:hover {
//       color: #5b5b5b;
//       text-decoration: underline;
//     }
//   }

//   i {
//     display: inline-block;
//     font-style: normal;
//     color: #aaa;
//     line-height: 18px;
//     padding: 0 8px;
//   }
// `;
