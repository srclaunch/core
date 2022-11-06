import { ReactElement } from 'react';
import styled from 'styled-components';

export const PageFooter = (): ReactElement => (
  <Container>
    <ResponsiveContainer>
      <Ad></Ad>
    </ResponsiveContainer>

    <ResponsiveContainer>
      <Top>
        <LinkSection>
          <span className="title">Support</span>
          <a href="https://intercom.help/budgetbloom/en">Help Center</a>
          <a href="mailto:contact@budgetbloom.com">Email us</a>
          <a href="https://budgetbloom.com/privacy">Privacy</a>
        </LinkSection>

        <LinkSection>
          <span className="title">Pages</span>
          <a href="https://budgetbloom.ghost.io">Blog</a>
          <a href="https://budgetbloom.com/about">About</a>
          <a href="https://budgetbloom.com/roadmap">Roadmap</a>
        </LinkSection>

        <LinkSection>
          <span className="title">Home</span>
          <a href="https://budgetbloom.com/#features">Features</a>
        </LinkSection>

        <Details>
          <img alt="BudgetBloom" height="36" src="/logo_horizontal_dark.png" />

          <p>
            Elegant, easy-to-use personal finance and budgeting software for
            everyone.
          </p>

          <Social>
            <a
              className="facebook"
              target="_blank"
              rel="nofollow noreferrer noopener"
              href="https://facebook.com/BudgetBloom-100300648701100"
            >
              <svg
                viewBox="0 0 32 32"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M11.848,32h6.612V15.998h4.411l0.584-5.514H18.46l0.007-2.761c0-1.437,0.137-2.209,2.2-2.209h2.757V0h-4.412   c-5.299,0-7.164,2.675-7.164,7.174v3.311H8.545v5.515h3.303V32z"></path>
              </svg>
            </a>

            <a
              className="twitter"
              target="_blank"
              rel="nofollow noreferrer noopener"
              href="https://twitter.com/budgetbloom"
            >
              <svg
                viewBox="0 0 32 32"
                version="1.0"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563  c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z"></path>
              </svg>
            </a>

            <a
              className="linkedin"
              target="_blank"
              rel="nofollow noreferrer noopener"
              href="https://www.linkedin.com/company/budgetbloom"
            >
              <svg
                viewBox="0 0 382 382"
                enableBackground="new 0 0 382 382"
                xmlSpace="preserve"
              >
                <path
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                />
              </svg>
            </a>
          </Social>
        </Details>
      </Top>
    </ResponsiveContainer>

    <ResponsiveContainer>
      <Bottom>
        <Copyright>
          <span className="copyright">
            © {new Date().getFullYear()} BudgetBloom, LLC. <br />
          </span>
          <span className="trademark">
            BudgetBloom is a registered trademark of BudgetBloom LLC.
          </span>
        </Copyright>
      </Bottom>
    </ResponsiveContainer>
  </Container>
);

const Container = styled.footer`
  background: #fafafa;
  padding: 50px 0;
  position: relative;
  z-index: 200;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;

const ResponsiveContainer = styled.div`
  padding: 0 50px;
  width: 100%;

  /* @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1160px;
  } */
`;

const Ad = styled.div`
  background: #f2f2f2;
  border-radius: 15px;
  height: 214px;
  margin: 0 0 75px 0;
`;

const Top = styled.div`
  padding: 0 0 50px 0;

  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;
const Bottom = styled.div`
  padding: 50px 0 0 0;
`;

const Details = styled.div`
  margin: 0 0 35px 0;

  img {
    display: block;
    margin-bottom: 27px;
  }

  p {
    padding: 0;
    width: 100%;
  }

  p {
    color: #858a8f;
    line-height: 32px;
    margin: 0 0 35px 0;
  }

  /* @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    float: left;
    margin: 0;
    padding: 0 25px 0 0;
    width: calc(100% / 16 * 7);

    p {
      padding: 0 100px 0 0;
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  } */
`;

const Social = styled.div`
  &:after {
    clear: both;
    content: '';
    display: block;
  }

  a {
    background: #f2f2f2;
    border: 2px solid transparent;
    border-radius: 8px;
    height: 56px;
    padding: 16px;
    margin-right: 10px;
    text-align: center;
    transition: border 0.2s ease-in-out;
    width: 56px;

    svg {
      display: inline;
      max-height: 24px;
      max-width: 24px;
      position: relative;
      top: 7px;
    }

    &.linkedin {
      background: #f2f2f2;

      &:hover {
        border: 2px solid #0077b7;
      }

      svg {
        fill: #0077b7;
      }
    }

    &.twitter {
      background: #e1e8ed;

      &:hover {
        border: 2px solid #1da1f2;
      }

      svg {
        fill: #1da1f2;
      }
    }

    &.facebook {
      background: #f2f2f2;

      &:hover {
        border: 2px solid #4267b2;
      }

      svg {
        fill: #4267b2;
      }
    }
  }

  /* @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  } */
`;

const LinkSection = styled.div`
  margin: 0 0 50px 0;
  width: 100%;

  span.title {
    color: #333;
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 0 15px 0;
  }

  a {
    color: #858a8f;
    display: block;
    line-height: 32px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #3b3b3b;
    }
  }

  /* @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    float: right;
    width: calc(100% / 16 * 3);

    span.title {
      margin: 0 0 31px 0;
    }
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  } */
`;

// const Contact = styled.div`
//   margin: 15px 0 50px 0;

//   a {
//     color: rgba(39, 88, 54, 1);
//     display: inline-block;
//     font-size: 16px;
//   }
// `;

const Copyright = styled.div`
  padding: 15px 0 0 0;

  span.copyright {
    color: #898a8e;
    font-size: 14px;
    font-weight: 600;
    line-height: 36px;
  }

  span.trademark {
    color: #aaa;
    font-size: 13px;
    line-height: 20px;
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
  }
`;

// const Logo = styled.div`
//   a {
//     display: inline;
//   }
//   img {
//     height: 32px;
//   }
// `;
