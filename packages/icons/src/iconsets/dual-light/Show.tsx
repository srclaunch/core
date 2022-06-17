import { memo, ReactElement, SVGProps } from 'react';
export const Show = memo(
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
          d="M12 19C17.215 19 20.2099 15.1148 21.3982 13.1334C21.8205 12.4292 21.8205 11.5708 21.3982 10.8666C20.2099 8.88521 17.215 5 12 5C6.78498 5 3.79007 8.88521 2.60179 10.8666C2.17952 11.5708 2.17952 12.4292 2.60179 13.1334C3.79007 15.1148 6.78498 19 12 19Z"
          fill="url(#paint0_linear)"
        />
        <circle cx="12" cy="12" r="3" fill="url(#paint1_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="9"
            x2="12"
            y2="15"
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
