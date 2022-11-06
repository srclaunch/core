import { memo, ReactElement, SVGProps } from 'react';
export const Folder = memo(
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
          d="M5 21H19C20.6569 21 22 19.6569 22 18V8C22 6.34315 20.6569 5 19 5H11L9.87868 3.87868C9.31607 3.31607 8.55301 3 7.75736 3H5C3.34315 3 2 4.34315 2 6V18C2 19.6569 3.34315 21 5 21Z"
          fill="url(#paint0_linear)"
        />
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="3"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
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
