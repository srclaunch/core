import { memo, ReactElement, SVGProps } from 'react';
export const Layout = memo(
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
          d="M13 10C13 9.44772 12.5523 9 12 9H4C3.44772 9 3 9.44772 3 10V18C3 19.6569 4.34315 21 6 21H12C12.5523 21 13 20.5523 13 20V10Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M16 21C15.4477 21 15 20.5523 15 20V10C15 9.44772 15.4477 9 16 9H20C20.5523 9 21 9.44772 21 10V18C21 19.6569 19.6569 21 18 21H16Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55229 3 6V6Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="9"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="9"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="7"
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
