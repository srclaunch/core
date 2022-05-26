import { memo, ReactElement, SVGProps } from 'react';
export const Italics = memo(
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
          d="M6.5 20C6.5 19.4477 6.94772 19 7.5 19H13C13.5523 19 14 19.4477 14 20C14 20.5523 13.5523 21 13 21H7.5C6.94772 21 6.5 20.5523 6.5 20Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 4C10 3.44772 10.4477 3 11 3H16.5C17.0523 3 17.5 3.44772 17.5 4C17.5 4.55228 17.0523 5 16.5 5H11C10.4477 5 10 4.55228 10 4Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M14.7808 5H12.7192L9.21924 19H11.2808L14.7808 5Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M14.0213 3C14.0066 2.99967 13.9919 2.99968 13.9772 3H14.0213Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M10.0221 21H9.97945C9.9937 21.0003 10.0079 21.0003 10.0221 21Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10.25"
            y1="19"
            x2="10.25"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="13.75"
            y1="3"
            x2="13.75"
            y2="5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="2.99976"
            x2="12"
            y2="21.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="2.99976"
            x2="12"
            y2="21.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="12"
            y1="2.99976"
            x2="12"
            y2="21.0002"
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
