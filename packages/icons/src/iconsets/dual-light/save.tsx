import { memo, ReactElement, SVGProps } from 'react';
export const Save = memo(
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
          d="M2 5C2 3.34315 3.34315 2 5 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L21.1213 6.12132C21.6839 6.68393 22 7.44699 22 8.24264V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M6 16C6 14.8954 6.89543 14 8 14H16C17.1046 14 18 14.8954 18 16V22H6V16Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M15.7574 2H7V6C7 7.10457 7.89543 8 9 8H15C16.1046 8 17 7.10457 17 6V2.26946C16.6135 2.09355 16.1902 2 15.7574 2Z"
          fill="url(#paint2_linear)"
        />
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
            y1="14"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="8"
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
