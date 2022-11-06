import { memo, ReactElement, SVGProps } from 'react';
export const FastLeft = memo(
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
          d="M13.2 9.6C11.6 10.8 11.6 13.2 13.2 14.4L17.2 17.4C19.1777 18.8833 22 17.4721 22 15V9C22 6.52786 19.1777 5.11672 17.2 6.6L13.2 9.6Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M3.2 9.6C1.6 10.8 1.6 13.2 3.2 14.4L7.2 17.4C9.17771 18.8833 12 17.4721 12 15V9C12 6.52786 9.17771 5.11672 7.2 6.6L3.2 9.6Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="16"
            y1="3"
            x2="16"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="6"
            y1="3"
            x2="6"
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
