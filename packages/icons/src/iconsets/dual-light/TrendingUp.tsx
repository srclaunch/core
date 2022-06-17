import { memo, ReactElement, SVGProps } from 'react';
export const TrendingUp = memo(
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
          d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L14.4142 15C13.6332 15.7811 12.3668 15.781 11.5858 15L9 12.4142L3.70711 17.7071C3.31658 18.0976 2.68342 18.0976 2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L7.58579 11C8.36683 10.219 9.63316 10.2189 10.4142 11L13 13.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 7C15 6.44772 15.4477 6 16 6H21C21.5523 6 22 6.44772 22 7V12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12V8H16C15.4477 8 15 7.55228 15 7Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.5"
            y1="7"
            x2="11.5"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18.5"
            y1="6"
            x2="18.5"
            y2="13"
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
