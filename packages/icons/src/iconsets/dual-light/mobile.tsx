import { memo, ReactElement, SVGProps } from 'react';
export const Mobile = memo(
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
          d="M5 5C5 3.34315 6.34315 2 8 2H16C17.6569 2 19 3.34315 19 5V19C19 20.6569 17.6569 22 16 22H8C6.34315 22 5 20.6569 5 19V5Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M8 2H16V2C16 3.10457 15.1046 4 14 4H10C8.89543 4 8 3.10457 8 2V2Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="4"
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
