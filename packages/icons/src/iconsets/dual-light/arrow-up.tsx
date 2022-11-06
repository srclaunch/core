import { memo, ReactElement, SVGProps } from 'react';
export const ArrowUp = memo(
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
          d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="21"
            x2="12"
            y2="3.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="11"
            x2="12"
            y2="2.91421"
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
