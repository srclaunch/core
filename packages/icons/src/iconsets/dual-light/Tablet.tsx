import { memo, ReactElement, SVGProps } from 'react';
export const Tablet = memo(
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
          y="2"
          width="18"
          height="20"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <circle cx="12" cy="19" r="1" fill="url(#paint1_linear)" />
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
            y1="18"
            x2="12"
            y2="20"
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
