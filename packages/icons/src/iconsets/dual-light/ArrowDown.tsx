import { memo, ReactElement, SVGProps } from 'react';
export const ArrowDown = memo(
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
          d="M12 3C12.5523 3 13 3.44772 13 4V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V4C11 3.44772 11.4477 3 12 3Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.79289 13.2929C5.18342 12.9024 5.81658 12.9024 6.20711 13.2929L12 19.0858L17.7929 13.2929C18.1834 12.9024 18.8166 12.9024 19.2071 13.2929C19.5976 13.6834 19.5976 14.3166 19.2071 14.7071L13.4142 20.5C12.6332 21.281 11.3668 21.281 10.5858 20.5L4.79289 14.7071C4.40237 14.3166 4.40237 13.6834 4.79289 13.2929Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="20.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="13"
            x2="12"
            y2="21.0858"
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
