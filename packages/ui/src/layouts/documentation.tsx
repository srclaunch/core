import { MenuItem } from '@srclaunch/types';
import { memo, PropsWithChildren, ReactElement } from 'react';

import {
  Container,
  NavigationMenu,
  Spacer,
  ThemeSelector,
  Title,
} from '../components';
import {
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Fill,
  Orientation,
  Overflow,
} from '../types';
// import componentLibrary from '../component-library';
{
  /* <Workspace>
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
        </Workspace> */
}

// console.log('store', store);
export const DocumentationLayout = memo(
  ({
    children,
    title,
    menu,
  }: PropsWithChildren<{
    readonly menu?: readonly MenuItem[];
    readonly title?: string;
  }>): ReactElement => {
    return (
      // <Provider store={store}>
      <Container
        orientation={Orientation.Horizontal}
        overflow={Overflow.Hidden}
        backgroundColor={BackgroundColor.Default}
        className="wrapper"
        fill={Fill.Both}
      >
        <Container
          overflow={Overflow.Hidden}
          backgroundColor={BackgroundColor.Lighter}
          className="documentation-layout"
          fill={Fill.Both}
        >
          <Container
            orientation={Orientation.Horizontal}
            alignVertical={AlignVertical.Center}
            backgroundColor={BackgroundColor.Lightest}
            borderBottomColor={BorderColor.Default}
            className="navigation-bar"
            fill={Fill.Horizontal}
            padding={Amount.Least}
            paddingLeft={Amount.Default}
            paddingRight={Amount.Default}
          >
            <Title>{title}</Title>

            <Spacer />

            <ThemeSelector width={200} />
          </Container>

          <Container
            className="bottom"
            orientation={Orientation.Horizontal}
            overflow={Overflow.Hidden}
            fill={Fill.Both}
          >
            <NavigationMenu
              overflow={Overflow.ScrollVertical}
              matchExactPath={false}
              menu={menu}
              fill={Fill.Vertical}
              width={240}
            />

            <Container
              overflow={Overflow.ScrollVertical}
              padding={Amount.Default}
              fill={Fill.Both}
            >
              {children}
            </Container>
          </Container>
        </Container>
      </Container>
      // </Provider>
    );
  },
);

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
