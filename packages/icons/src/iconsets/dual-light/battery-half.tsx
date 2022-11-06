import { memo, ReactElement, SVGProps } from 'react';
export const BatteryHalf = memo(
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
        <rect
          x="6"
          y="5"
          width="12"
          height="17"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 18C9 17.4477 9.44772 17 10 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H10C9.44772 19 9 18.5523 9 18Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16H10C9.44772 16 9 15.5523 9 15Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="5"
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
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="17"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="14"
            x2="12"
            y2="16"
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
