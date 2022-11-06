import { memo, ReactElement, SVGProps } from 'react';
export const Slack = memo(
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
          x="1.5"
          y="6.5"
          width="10"
          height="5"
          rx="2.5"
          fill="url(#paint0_linear)"
        />
        <path
          d="M7.5 3.5C7.5 2.39543 8.39543 1.5 9.5 1.5V1.5C10.6046 1.5 11.5 2.39543 11.5 3.5V4.5C11.5 5.05228 11.0523 5.5 10.5 5.5H9.5C8.39543 5.5 7.5 4.60457 7.5 3.5V3.5Z"
          fill="url(#paint1_linear)"
        />
        <rect
          x="22.5"
          y="17.5"
          width="10"
          height="5"
          rx="2.5"
          transform="rotate(180 22.5 17.5)"
          fill="url(#paint2_linear)"
        />
        <path
          d="M16.5 20.5C16.5 21.6046 15.6046 22.5 14.5 22.5V22.5C13.3954 22.5 12.5 21.6046 12.5 20.5L12.5 19.5C12.5 18.9477 12.9477 18.5 13.5 18.5L14.5 18.5C15.6046 18.5 16.5 19.3954 16.5 20.5V20.5Z"
          fill="url(#paint3_linear)"
        />
        <rect
          x="6.5"
          y="22.5"
          width="10"
          height="5"
          rx="2.5"
          transform="rotate(-90 6.5 22.5)"
          fill="url(#paint4_linear)"
        />
        <path
          d="M3.5 13.5L4.5 13.5L4.5 14.5C4.5 15.0523 4.05228 15.5 3.5 15.5C2.94772 15.5 2.5 15.0523 2.5 14.5C2.5 13.9477 2.94772 13.5 3.5 13.5Z"
          fill="url(#paint5_linear)"
          stroke="url(#paint6_linear)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="17.5"
          y="1.5"
          width="10"
          height="5"
          rx="2.5"
          transform="rotate(90 17.5 1.5)"
          fill="url(#paint7_linear)"
        />
        <path
          d="M20.5 10.5L19.5 10.5L19.5 9.5C19.5 8.94772 19.9477 8.5 20.5 8.5C21.0523 8.5 21.5 8.94772 21.5 9.5C21.5 10.0523 21.0523 10.5 20.5 10.5Z"
          fill="url(#paint8_linear)"
          stroke="url(#paint9_linear)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6.5"
            y1="6.5"
            x2="6.5"
            y2="11.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="9.5"
            y1="1.5"
            x2="9.5"
            y2="5.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="27.5"
            y1="17.5"
            x2="27.5"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="14.5"
            y1="22.5"
            x2="14.5"
            y2="18.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="11.5"
            y1="22.5"
            x2="11.5"
            y2="27.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="1.5"
            y1="14.5"
            x2="5.5"
            y2="14.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="1.5"
            y1="14.5"
            x2="5.5"
            y2="14.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="22.5"
            y1="1.5"
            x2="22.5"
            y2="6.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="22.5"
            y1="9.5"
            x2="18.5"
            y2="9.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="22.5"
            y1="9.5"
            x2="18.5"
            y2="9.5"
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
