import { memo, ReactElement, SVGProps } from 'react';
export const Figma = memo(
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
        <circle cx="15" cy="12" r="3" fill="url(#paint0_linear)" />
        <path
          d="M6 6C6 4.34315 7.34315 3 9 3H12V9H9C7.34315 9 6 7.65685 6 6V6Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M12 3H15C16.6569 3 18 4.34315 18 6V6C18 7.65685 16.6569 9 15 9H12V3Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M6 12C6 10.3431 7.34314 9 8.99999 9L11 9C11.5523 9 12 9.44772 12 10V14C12 14.5523 11.5523 15 11 15H8.99999C7.34314 15 6 13.6568 6 12V12Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M6 18C6 16.3431 7.34315 15 9 15H11C11.5523 15 12 15.4477 12 16V18C12 19.6569 10.6569 21 9 21V21C7.34315 21 6 19.6569 6 18V18Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="15"
            y1="9"
            x2="15"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="9"
            y1="3"
            x2="9"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="15"
            y1="3"
            x2="15"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="9"
            y1="9"
            x2="9"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="9"
            y1="15"
            x2="9"
            y2="21"
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
