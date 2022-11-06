import { memo, ReactElement, SVGProps } from 'react';
export const Category = memo(
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
          x="3"
          y="3"
          width="8"
          height="8"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <rect
          x="3"
          y="13"
          width="8"
          height="8"
          rx="3"
          fill="url(#paint1_linear)"
        />
        <rect
          x="13"
          y="3"
          width="8"
          height="8"
          rx="3"
          fill="url(#paint2_linear)"
        />
        <rect
          x="13"
          y="13"
          width="8"
          height="8"
          rx="3"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7"
            y1="3"
            x2="7"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="7"
            y1="13"
            x2="7"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="17"
            y1="3"
            x2="17"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="17"
            y1="13"
            x2="17"
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
