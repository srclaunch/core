import {
    // Workspace,
    AlignHorizontal,
    AlignVertical,
    Amount,
    // Logo,
    // Page,
    BackgroundColor, Container, Label, Orientation,
    Overflow, TextColor
} from '@srclaunch/ui';
import { memo, PropsWithChildren, ReactElement } from 'react';

// import { Orientation } from '@srclaunch/types';

export const Public = memo(
  ({ children }: PropsWithChildren<{}>): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          overflow: Overflow.ScrollVertical,
        }}
        background={{ color: BackgroundColor.Default }}
      >
        <Container
          alignment={{
            horizontal: AlignHorizontal.Left,
            orientation: Orientation.Horizontal,
          }}
          padding={{ all: Amount.Most }}
          size={{
            width: 928,
          }}
        >
          <Container
            alignment={{
              horizontal: AlignHorizontal.Center,
              vertical: AlignVertical.Center,
            }}
            background={{ color: BackgroundColor.Dark }}
            size={{
              height: 80,
              width: 220,
            }}
          >
            <Label textColor={TextColor.Darker}>Logo</Label>
          </Container>
        </Container>

        <Container className="content" size={{ width: 928 }}>
          {children}
        </Container>

        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          margin={{ top: Amount.Full }}
          padding={{ all: Amount.Default }}
        >
          <Label margin={{ right: Amount.Less }}>Powered by</Label>
          {/* <Image
          margin={{ top: -3}}
          url="/assets/images/AzorakLogoFinal.png"
          size={{
            height: 18,
          }}
         
        /> */}
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
