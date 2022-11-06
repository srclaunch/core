import { memo, ReactElement, SVGProps } from 'react';
export const Film = memo(
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
          d="M13 5H16V7H13V5ZM18 7V5H19C19.5523 5 20 5.44771 20 6V7H18ZM13 9H17H20V15H17H13V9ZM16 17H13V19H16V17ZM18 19V17H20V18C20 18.5523 19.5523 19 19 19H18ZM11 5H8V7H11V5ZM11 9H7H4V15H7H11V9ZM11 17H8V19H11V17ZM12 21H19C20.6569 21 22 19.6569 22 18V16V8V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V8V16V18C2 19.6569 3.34315 21 5 21H12ZM6 5H5C4.44772 5 4 5.44772 4 6V7H6V5ZM4 18V17H6V19H5C4.44772 19 4 18.5523 4 18Z"
          fill="url(#paint0_linear)"
        />
        <rect x="4" y="9" width="7" height="6" fill="url(#paint1_linear)" />
        <rect x="13" y="9" width="7" height="6" fill="url(#paint2_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="7.5"
            y1="9"
            x2="7.5"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="16.5"
            y1="9"
            x2="16.5"
            y2="15"
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
