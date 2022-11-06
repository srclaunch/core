import { memo, ReactElement, SVGProps } from 'react';
export const Database = memo(
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
          d="M12 16C17.0495 16 21 14.2723 21 12V7H3V12C3 14.2723 6.95053 16 12 16Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 12C21 14.2723 17.0495 16 12 16C6.95053 16 3 14.2723 3 12V17C3 19.2723 6.95053 21 12 21C17.0495 21 21 19.2723 21 17V12Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M21 7.11429C21 9.38654 16.9706 11 12 11C7.02944 11 3 9.38654 3 7.11429C3 4.84203 7.02944 3 12 3C16.9706 3 21 4.84203 21 7.11429Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="7"
            x2="12"
            y2="16"
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
            y1="3"
            x2="12"
            y2="11"
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
