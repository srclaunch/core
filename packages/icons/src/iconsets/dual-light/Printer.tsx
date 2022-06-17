import { memo, ReactElement, SVGProps } from 'react';
export const Printer = memo(
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
          d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V9H7V5Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 19C3.34315 19 2 17.6569 2 16V10C2 8.34315 3.34315 7 5 7H19C20.6569 7 22 8.34315 22 10V16C22 17.6569 20.6569 19 19 19H5Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H7V19C7 20.6569 8.34315 22 10 22H14C15.6569 22 17 20.6569 17 19V16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H6Z"
          fill="url(#paint2_linear)"
        />
        <circle cx="18" cy="11" r="0.5" stroke="url(#paint3_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="7"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="14"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="18"
            y1="10"
            x2="18"
            y2="12"
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
