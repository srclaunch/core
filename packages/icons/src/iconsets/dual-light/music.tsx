import { memo, ReactElement, SVGProps } from 'react';
export const Music = memo(
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
          d="M12 6.34233C12 4.96573 12.9369 3.76578 14.2724 3.4319L16.3837 2.90408C18.2206 2.44485 20 3.83417 20 5.72761V5.72761C20 7.06311 19.0911 8.22723 17.7955 8.55114L12 10V6.34233Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M12 10V13.5351C11.4117 13.1948 10.7286 13 10 13C7.79086 13 6 14.7909 6 17C6 19.2091 7.79086 21 10 21C12.2091 21 14 19.2091 14 17V9.5L12 10Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="16"
            y1="2"
            x2="16"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="10"
            y1="9.5"
            x2="10"
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
