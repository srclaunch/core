import { memo, ReactElement, SVGProps } from 'react';
export const Ruler = memo(
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
          d="M14.1212 2.80751C15.2928 1.63594 17.1923 1.63594 18.3639 2.80751L21.1923 5.63594C22.3639 6.80751 22.3639 8.70701 21.1923 9.87858L9.87858 21.1923C8.70701 22.3639 6.80751 22.3639 5.63594 21.1923L2.80751 18.3639C1.63594 17.1923 1.63594 15.2928 2.80751 14.1212L14.1212 2.80751Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8284 7.75729L11.9999 4.92886L13.4141 3.51465L16.2426 6.34308C16.6331 6.7336 16.6331 7.36676 16.2426 7.75729C15.852 8.14781 15.2189 8.14781 14.8284 7.75729Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.1715 13.4141L6.34307 10.5857L7.75729 9.1715L10.5857 11.9999C10.9762 12.3905 10.9762 13.0236 10.5857 13.4141C10.1952 13.8047 9.56203 13.8047 9.1715 13.4141Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2928 9.87861L9.1715 7.75729L10.5857 6.34308L12.707 8.4644C13.0976 8.85492 13.0976 9.48808 12.707 9.87861C12.3165 10.2691 11.6833 10.2691 11.2928 9.87861Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.63597 15.5355L3.51465 13.4141L4.92886 11.9999L7.05018 14.1212C7.44071 14.5118 7.44071 15.1449 7.05018 15.5355C6.65966 15.926 6.02649 15.926 5.63597 15.5355Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.9999"
            y1="1.92883"
            x2="11.9999"
            y2="22.071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="10.0251"
            y1="3.51465"
            x2="10.0251"
            y2="15.8284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="10.0251"
            y1="3.51465"
            x2="10.0251"
            y2="15.8284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="10.0251"
            y1="3.51465"
            x2="10.0251"
            y2="15.8284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="10.0251"
            y1="3.51465"
            x2="10.0251"
            y2="15.8284"
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
