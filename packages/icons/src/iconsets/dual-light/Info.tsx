import { memo, ReactElement, SVGProps } from 'react';
export const Info = memo(
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
        <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 11C12.5523 11 13 11.4477 13 12V17.0009C13 17.5532 12.5523 18.0009 12 18.0009C11.4477 18.0009 11 17.5532 11 17.0009V12C11 11.4477 11.4477 11 12 11Z"
          fill="url(#paint1_linear)"
        />
        <circle cx="12" cy="8" r="1" fill="url(#paint2_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="11"
            x2="12"
            y2="18.0009"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="7"
            x2="12"
            y2="9"
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
