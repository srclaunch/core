import { memo, ReactElement, SVGProps } from 'react';
export const Collapse = memo(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 19C16 17.3431 17.3431 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19C18.4477 18 18 18.4477 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 5C16 6.65685 17.3431 8 19 8H21C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6H19C18.4477 6 18 5.55228 18 5V3C18 2.44772 17.5523 2 17 2C16.4477 2 16 2.44772 16 3V5Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 5C8 6.65685 6.65685 8 5 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H5C5.55228 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2C7.55228 2 8 2.44772 8 3V5Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 19C8 17.3431 6.65685 16 5 16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H5C5.55228 18 6 18.4477 6 19V21C6 21.5523 6.44772 22 7 22C7.55228 22 8 21.5523 8 21V19Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="19"
            y1="16"
            x2="19"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="19"
            y1="8"
            x2="19"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="5"
            y1="8"
            x2="5"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="5"
            y1="16"
            x2="5"
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
