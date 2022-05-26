import { memo, ReactElement, SVGProps } from 'react';
export const ArrowRight = memo(
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
          d="M3 12C3 11.4477 3.44772 11 4 11L19.5 11C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13L4 13C3.44772 13 3 12.5523 3 12Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2929 19.2071C12.9024 18.8166 12.9024 18.1834 13.2929 17.7929L19.0858 12L13.2929 6.20711C12.9024 5.81658 12.9024 5.18342 13.2929 4.79289C13.6834 4.40237 14.3166 4.40237 14.7071 4.79289L20.5 10.5858C21.281 11.3668 21.281 12.6332 20.5 13.4142L14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="3"
            y1="12"
            x2="20.5"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="13"
            y1="12"
            x2="21.0858"
            y2="12"
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
