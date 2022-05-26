import { memo, ReactElement, SVGProps } from 'react';
export const Scan = memo(
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
          d="M10 6C8.34315 6 7 7.34315 7 9V13H17V9C17 7.34315 15.6569 6 14 6H10Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M17 15H7C7 16.6569 8.34315 18 10 18H14C15.6569 18 17 16.6569 17 15Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5C2 3.34315 3.34315 2 5 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V5Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 19C2 20.6569 3.34315 22 5 22H7C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V19Z"
          fill="url(#paint4_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 19C22 20.6569 20.6569 22 19 22H17C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V19Z"
          fill="url(#paint5_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 5C22 3.34315 20.6569 2 19 2H17C16.4477 2 16 2.44772 16 3C16 3.55228 16.4477 4 17 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 20.4477 8 21 8C21.5523 8 22 7.55228 22 7V5Z"
          fill="url(#paint6_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="6"
            x2="12"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="6"
            x2="12"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="11"
            x2="12"
            y2="13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="5"
            y1="2"
            x2="5"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="5"
            y1="22"
            x2="5"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="19"
            y1="22"
            x2="19"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="19"
            y1="2"
            x2="19"
            y2="8"
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
