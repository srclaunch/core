import { memo, ReactElement, SVGProps } from 'react';
export const Coffee = memo(
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
          d="M5 3C3.89543 3 3 3.89543 3 5V13C3 15.7614 5.23858 18 8 18H13C15.6482 18 17.8155 15.9413 17.9888 13.3371L19.9487 12.6838C21.1737 12.2754 22 11.129 22 9.83772V7C22 5.89543 21.1046 5 20 5H18C18 3.89543 17.1046 3 16 3H5ZM18 11.2251V7H20V9.83772C20 10.2682 19.7246 10.6503 19.3162 10.7864L18 11.2251Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 20C2 19.4477 2.44772 19 3 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H3C2.44772 21 2 20.5523 2 20Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.5"
            y1="3"
            x2="12.5"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="11"
            y1="19"
            x2="11"
            y2="21"
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
