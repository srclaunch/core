import { memo, ReactElement, SVGProps } from 'react';
export const Flag = memo(
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
          d="M3 4C3 3.44772 3.44772 3 4 3H10.0263C10.6712 3 11.3119 3.10397 11.9237 3.3079L13.0763 3.6921C13.6881 3.89603 14.3288 4 14.9737 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H14.9737C14.3288 16 13.6881 15.896 13.0763 15.6921L11.9237 15.3079C11.3119 15.104 10.6712 15 10.0263 15H4C3.44772 15 3 14.5523 3 14V4Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2C4.55228 2 5 2.44772 5 3V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="4"
            y1="2"
            x2="4"
            y2="22"
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
