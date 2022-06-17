import { memo, ReactElement, SVGProps } from 'react';
export const Headphone = memo(
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
          d="M12 4C7.58172 4 4 7.58172 4 12V13H2V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V13H20V12C20 7.58172 16.4183 4 12 4Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M6 12H2V18C2 19.6569 3.34315 21 5 21H6C7.65685 21 9 19.6569 9 18V15C9 13.3431 7.65685 12 6 12Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M18 12C16.3431 12 15 13.3431 15 15V18C15 19.6569 16.3431 21 18 21H19C20.6569 21 22 19.6569 22 18V12H18Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="12"
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
            y1="12"
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
