import { memo, ReactElement, SVGProps } from 'react';
export const EventAdd = memo(
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
          x="2"
          y="4"
          width="20"
          height="18"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 2C7.55228 2 8 2.44772 8 3V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V3C6 2.44772 6.44772 2 7 2Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 2C17.5523 2 18 2.44772 18 3V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V3C16 2.44772 16.4477 2 17 2Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10L11 12H9C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H11L11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H13L13 10Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="7"
            y1="2"
            x2="7"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="17"
            y1="2"
            x2="17"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="9"
            x2="12"
            y2="17"
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
