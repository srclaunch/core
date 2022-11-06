import { memo, ReactElement, SVGProps } from 'react';
export const TrendingDown = memo(
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
          d="M20.7071 16.7071C21.0976 16.3166 21.0976 15.6834 20.7071 15.2929L14.4142 9C13.6332 8.21895 12.3668 8.21895 11.5858 9L9 11.5858L3.70711 6.29289C3.31658 5.90237 2.68342 5.90237 2.29289 6.29289C1.90237 6.68342 1.90237 7.31658 2.29289 7.70711L7.58579 13C8.36683 13.781 9.63316 13.7811 10.4142 13L13 10.4142L19.2929 16.7071C19.6834 17.0976 20.3166 17.0976 20.7071 16.7071Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 17C15 17.5523 15.4477 18 16 18H21C21.5523 18 22 17.5523 22 17V12C22 11.4477 21.5523 11 21 11C20.4477 11 20 11.4477 20 12V16H16C15.4477 16 15 16.4477 15 17Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.5"
            y1="17"
            x2="11.5"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18.5"
            y1="18"
            x2="18.5"
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
