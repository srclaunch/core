import { memo, ReactElement, SVGProps } from 'react';
export const Umbrella = memo(
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
          d="M12 12C12.5523 12 13 12.4477 13 13V19C13 20.6569 11.6569 22 10 22C8.34315 22 7 20.6569 7 19V18C7 17.4477 7.44772 17 8 17C8.55228 17 9 17.4477 9 18V19C9 19.5523 9.44772 20 10 20C10.5523 20 11 19.5523 11 19V13C11 12.4477 11.4477 12 12 12Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M12 3C6.81417 3 2.55031 6.94741 2.04924 12.0014C1.99475 12.551 2.44772 13 3 13H21C21.5523 13 22.0053 12.551 21.9508 12.0014C21.4497 6.94741 17.1858 3 12 3Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10"
            y1="12"
            x2="10"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="1"
            x2="12"
            y2="5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="3"
            x2="12"
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
