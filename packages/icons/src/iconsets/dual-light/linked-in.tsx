import { memo, ReactElement, SVGProps } from 'react';
export const LinkedIn = memo(
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
          d="M6 8C6.55228 8 7 8.44772 7 9V18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18V9C5 8.44772 5.44772 8 6 8Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 8.99963C10.9998 8.44752 10.5522 8 10 8C9.44772 8 9 8.44772 9 9V13V18C9 18.5523 9.44772 19 10 19C10.5523 19 11 18.5523 11 18V13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V18C17 18.5523 17.4477 19 18 19C18.5523 19 19 18.5523 19 18V13C19 10.2386 16.7614 8 14 8C12.8744 8 11.8357 8.37194 11 8.99963Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5C6.55228 5 7 5.44772 7 6Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6"
            y1="8"
            x2="6"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="14"
            y1="8"
            x2="14"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="6"
            y1="5"
            x2="6"
            y2="7"
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
