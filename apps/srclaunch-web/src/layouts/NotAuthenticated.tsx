import { DualLightIcons } from '@srclaunch/icons';
import {
  AlignHorizontal,
  AlignVertical,
  // Workspace,
  Amount,
  // Logo,
  // Page,
  BackgroundColor,
  BorderColor,
  BorderStyle,
  Container,
  Depth,
  Fill,
  Icon,
  Label,
  NavigationLink,
  Orientation,
  Overflow,
  Size,
  TextColor,
  TextSize,
  TextWeight,
  // PageContainer,
  // Panel,
} from '@srclaunch/ui';
import { memo, PropsWithChildren, ReactElement } from 'react';

// import { Orientation } from '@srclaunch/types';

export const NotAuthenticated = memo(
  ({ children }: PropsWithChildren<{}>): ReactElement => {
    return (
      <Container fill={Fill.Both} overflow={Overflow.ScrollVertical}>
        <Container
          alignHorizontal={AlignHorizontal.Center}
          backgroundColor={BackgroundColor.Default}
          borderBottomColor={BorderColor.Lighter}
          depth={Depth.High}
          className="header"
          orientation={Orientation.Horizontal}
          fill={Fill.Horizontal}
          padding={Amount.More}
        >
          <NavigationLink
            alignHorizontal={AlignHorizontal.Center}
            borderRadius={Amount.All}
            paddingLeft={Amount.More}
            paddingRight={Amount.More}
            to="/"
          >
            <Icon
              alignHorizontal={AlignHorizontal.Left}
              alignVertical={AlignVertical.Center}
              marginRight={Amount.Less}
              name={DualLightIcons.Home}
              size={Size.Small}
            />

            <Label
              // alignContent={Align.Center}
              textColor={TextColor.Lighter}
              textSize={TextSize.Large}
              textWeight={TextWeight.Most}
            >
              SrcLaunch
            </Label>
          </NavigationLink>
        </Container>

        <Container fill={Fill.Both} className="content">
          {children}
        </Container>
      </Container>
    );
  },
);

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
