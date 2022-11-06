import { memo, ReactElement, SVGProps } from 'react';
export const Playlist = memo(
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
          d="M2 6C2 5.44772 2.44772 5 3 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H3C2.44772 7 2 6.55228 2 6Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M3 10H11"
          stroke="url(#paint1_linear)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M3 14H6"
          stroke="url(#paint2_linear)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M16.2724 3.43195C14.9369 3.76583 14 4.96578 14 6.34238V13.5351C13.4117 13.1948 12.7286 13 12 13C9.79086 13 8 14.7909 8 17C8 19.2091 9.79086 21 12 21C14.2091 21 16 19.2091 16 17V9.50005L19.7955 8.55119C21.0911 8.22728 22 7.06316 22 5.72766C22 3.83422 20.2206 2.4449 18.3837 2.90413L16.2724 3.43195Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7"
            y1="5"
            x2="7"
            y2="7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="7"
            y1="10"
            x2="7"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="4.5"
            y1="14"
            x2="4.5"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="15"
            y1="2.8158"
            x2="15"
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
