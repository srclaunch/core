import { memo, ReactElement, SVGProps } from 'react';
export const Next = memo(
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
          d="M15.6041 9.4142C17.5761 10.5741 17.5761 13.4259 15.6041 14.5858L7.52106 19.3406C5.52116 20.517 3 19.075 3 16.7548V7.24525C3 4.925 5.52116 3.48304 7.52106 4.65945L15.6041 9.4142Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 4C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20C19.4477 20 19 19.5523 19 19V5C19 4.44772 19.4477 4 20 4Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.5"
            y1="2"
            x2="11.5"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="20"
            y1="4"
            x2="20"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
