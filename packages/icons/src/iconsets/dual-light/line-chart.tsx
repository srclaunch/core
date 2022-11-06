import { memo, ReactElement, SVGProps } from 'react';
export const LineChart = memo(
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
          d="M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.7071 8.29289C22.0976 8.68342 22.0976 9.31658 21.7071 9.70711L17.1213 14.2929C15.9497 15.4645 14.0503 15.4645 12.8787 14.2929L10.7071 12.1213C10.3166 11.7308 9.68342 11.7308 9.29289 12.1213L7.20711 14.2071C6.81658 14.5976 6.18342 14.5976 5.79289 14.2071C5.40237 13.8166 5.40237 13.1834 5.79289 12.7929L7.87868 10.7071C9.05025 9.53553 10.9497 9.53553 12.1213 10.7071L14.2929 12.8787C14.6834 13.2692 15.3166 13.2692 15.7071 12.8787L20.2929 8.29289C20.6834 7.90237 21.3166 7.90237 21.7071 8.29289Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="13.75"
            y1="8"
            x2="13.75"
            y2="15.1716"
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
