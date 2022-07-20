import { memo, ReactElement, SVGProps } from 'react';
export const ArrowUpDown = memo(
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
          d="M3.70711 9.20708C3.31658 9.5976 2.68342 9.5976 2.29289 9.20708C1.90237 8.81655 1.90237 8.18339 2.29289 7.79286L5.58579 4.49997C6.36684 3.71892 7.63317 3.71892 8.41421 4.49997L11.7071 7.79286C12.0976 8.18339 12.0976 8.81655 11.7071 9.20708C11.3166 9.5976 10.6834 9.5976 10.2929 9.20708L8 6.91418V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V6.91418L3.70711 9.20708Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M18 5C18 4.44772 17.5523 4 17 4C16.4477 4 16 4.44772 16 5V17.0858L13.7071 14.7929C13.3166 14.4024 12.6834 14.4024 12.2929 14.7929C11.9024 15.1834 11.9024 15.8166 12.2929 16.2071L15.5858 19.5C16.3668 20.281 17.6332 20.281 18.4142 19.5L21.7071 16.2071C22.0976 15.8166 22.0976 15.1834 21.7071 14.7929C21.3166 14.4024 20.6834 14.4024 20.2929 14.7929L18 17.0858V5Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7"
            y1="3.91418"
            x2="7"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="17"
            y1="4"
            x2="17"
            y2="20.0858"
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
