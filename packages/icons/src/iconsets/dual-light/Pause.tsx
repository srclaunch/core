import { memo, ReactElement, SVGProps } from 'react';
export const Pause = memo(
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
          d="M8 4C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20C8.55228 20 9 19.5523 9 19V5C9 4.44772 8.55228 4 8 4Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 4C15.4477 4 15 4.44772 15 5V19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="8"
            y1="4"
            x2="8"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="16"
            y1="4"
            x2="16"
            y2="20"
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
