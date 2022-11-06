import { memo, ReactElement, SVGProps } from 'react';
export const Bulb = memo(
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
          d="M16 14.7453C17.8135 13.4804 19 11.3787 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 11.3787 6.18652 13.4804 8 14.7453V15.5C8 17.1569 9.34315 18.5 11 18.5H13C14.6569 18.5 16 17.1569 16 15.5V14.7453Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 21C9 20.4477 9.44772 20 10 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="18.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="20"
            x2="12"
            y2="22"
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
