import { memo, ReactElement, SVGProps } from 'react';
export const Utensils = memo(
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
          d="M20 4C20 3.44772 19.5523 3 19 3C16.2386 3 14 5.23858 14 8V14C14 14.5523 14.4477 15 15 15H18L18 20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20L20 4Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M6 4C6 3.44772 5.55228 3 5 3C4.44772 3 4 3.44772 4 4V9C4 10.8638 5.27477 12.4299 7 12.874V20C7 20.5523 7.44772 21 8 21C8.55228 21 9 20.5523 9 20V12.874C10.7252 12.4299 12 10.8638 12 9V4C12 3.44772 11.5523 3 11 3C10.4477 3 10 3.44772 10 4V8H9V4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V8H6V4Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="17"
            y1="3"
            x2="17"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="8"
            y1="3"
            x2="8"
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
