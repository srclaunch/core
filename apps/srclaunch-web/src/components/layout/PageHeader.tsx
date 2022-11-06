import { Button, ButtonType, Image } from '@srclaunch/ui';
import {
  RootState,
  // useDispatch,
  useSelector,
} from '@srclaunch/web-app-state';
import { ReactElement } from 'react';
import styled from 'styled-components';

export const PageHeader = (): ReactElement => {
  // const dispatch = useDispatch();

  // const windowWidth = window.innerWidth;

  const path = useSelector(
    (state: RootState) => state.router.location.pathname,
  );

  const getLoginOrSignupButton = () => {
    if (path.includes('signup')) {
      return (
        <Button
          // onClick={() => {
          //   // dispatch(push('/login'));
          // }}
          type={ButtonType.Primary}
        >
          Sign in
        </Button>
      );
    }

    return (
      <Button
        events={{
          mouse: {
            onClick: () => {
              // dispatch(push('/signup'));
            },
          },
        }}
        type={ButtonType.Primary}
      >
        Sign up now
      </Button>
    );
  };

  return (
    <Container>
      <LogoContainer>
        <Image alt="Logo" url={'logo.png'} />
      </LogoContainer>

      <Links>{getLoginOrSignupButton()}</Links>
    </Container>
  );
};

const Container = styled.div`
  background: white;
  padding: 35px 0;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;

const LogoContainer = styled.div`
  float: left;

  img {
    height: 28px;
  }

  a {
    display: inline-block;
  }

  @media (min-width: 480px) {
    img {
      height: 32px;
    }
  }

  @media (min-width: 768px) {
    float: left;
    text-align: left;
  }
`;

const Links = styled.div`
  position: relative;
  top: -3px;
  float: right;

  div {
    display: inline;
  }

  button {
    margin: 0 0 0 0;
  }

  a {
    color: #5b5b5b;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 15px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    display: inline-block;
    margin: 0;
    text-align: left;

    div {
      float: right;
    }

    button {
      float: right;
      margin: 0 0 0 15px;
    }
  }
`;
//
// const Logo = styled.div`
//   padding: 23px 15px;
//   text-align: center;
//
//   &:after {
//     clear: both;
//     content: '';
//     display: block;
//   }
//
//   img {
//     float: left;
//     width: 140px;
//   }
//
//   @media (min-width: 480px) {
//   }
//
//   @media (min-width: 768px) {
//     padding: 23px 0;
//     img {
//       float: none;
//       margin: 0 auto;
//       width: 200px;
//     }
//   }
//
//   @media (min-width: 992px) {
//   }
//
//   @media (min-width: 1200px) {
//   }
// `;
//
// const RightAligned = styled.div`
//   position: absolute;
//   top: 17px;
//   right: 15px;
//
//   @media (min-width: 480px) {
//   }
//
//   @media (min-width: 768px) {
//     top: 25px;
//     right: 25px;
//   }
//
//   @media (min-width: 992px) {
//   }
//
//   @media (min-width: 1200px) {
//   }
// `;
//
// const LoginLink = styled.button`
//   background: rgba(230, 230, 230, 1);
//   border: none;
//   border-radius: 50px;
//   color: #3b3b3b;
//   cursor: pointer;
//   display: inline-block;
//   font-size: 14px;
//   font-weight: 600;
//   padding: 10px 17px;
//   text-decoration: none !important;
//   transition: background 0.2s ease-in;
//   user-select: none;
//
//   &:hover {
//     background: rgba(210, 210, 210, 0.8);
//   }
//
//   &:active {
//     background: rgba(210, 210, 210, 0.6);
//   }
// `;
