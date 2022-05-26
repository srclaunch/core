import { memo, ReactElement, SVGProps } from 'react';
export const MoreVertical = memo(
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
        <circle cx="12" cy="6" r="2" fill="url(#paint0_linear)" />
        <circle cx="12" cy="12" r="2" fill="url(#paint1_linear)" />
        <circle cx="12" cy="18" r="2" fill="url(#paint2_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="10"
            x2="12"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="16"
            x2="12"
            y2="20"
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
