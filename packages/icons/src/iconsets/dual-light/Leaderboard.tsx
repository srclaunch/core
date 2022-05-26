import { memo, ReactElement, SVGProps } from 'react';
export const Leaderboard = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M2 13C2 11.3431 3.34315 10 5 10H10V19H3C2.44772 19 2 18.5523 2 18V13Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M14 12H19C20.6569 12 22 13.3431 22 15V18C22 18.5523 21.5523 19 21 19H14V12Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M8 8C8 6.34315 9.34315 5 11 5H13C14.6569 5 16 6.34315 16 8V19H8V8Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6"
            y1="10"
            x2="6"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18"
            y1="12"
            x2="18"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
