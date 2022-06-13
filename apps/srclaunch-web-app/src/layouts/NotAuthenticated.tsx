import { DualLightIcons } from '@srclaunch/icons';
import {
  AlignHorizontal,
  AlignVertical,
  // Workspace,
  Amount,
  // Logo,
  // Page,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Container,
  Depth,
  Icon,
  Label,
  NavigationLink,
  Orientation,
  Overflow,
  Size,
  Sizes,
  TextColors,
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
      <Container alignment={{ overflow: Overflow.ScrollVertical }}>
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
          }}
          background={{ color: BackgroundColors.Default }}
          border={{
            bottom: {
              color: BorderColors.Lighter,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          depth={Depth.High}
          padding={{ all: Amount.More }}
        >
          <Container
            alignment={{
              horizontal: AlignHorizontal.Center,
              orientation: Orientation.Horizontal,
            }}
          >
            <NavigationLink
              alignment={{
                horizontal: AlignHorizontal.Center,
              }}
              borderRadius={{ all: Amount.All }}
              padding={{ left: Amount.More, right: Amount.More }}
              to="/"
            >
              <Icon
                alignment={{
                  horizontal: AlignHorizontal.Left,
                  vertical: AlignVertical.Center,
                }}
                margin={{ right: Amount.Less }}
                name={DualLightIcons.Home}
                size={{
                  height: Sizes.Small,
                  width: Sizes.Small,
                }}
              />

              <Label
                // alignContent={Align.Center}
                textColor={TextColors.Lighter}
                textSize={TextSize.Large}
                textWeight={TextWeight.Most}
              >
                Azorak
              </Label>
            </NavigationLink>
          </Container>
        </Container>

        <Container className="content">{children}</Container>
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
