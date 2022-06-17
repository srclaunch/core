import { memo, ReactElement, SVGProps } from 'react';
export const Play = memo(
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
          d="M17.6041 9.4142C19.5761 10.5741 19.5761 13.4259 17.6041 14.5858L9.52106 19.3406C7.52116 20.517 5 19.075 5 16.7548V7.24525C5 4.925 7.52116 3.48304 9.52106 4.65945L17.6041 9.4142Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="13.5"
            y1="2"
            x2="13.5"
            y2="22"
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
