import { memo, ReactElement, SVGProps } from 'react';
export const Facebook = memo(
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
          d="M13 7C13 5.89543 13.8954 5 15 5H16C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3H15C12.7909 3 11 4.79086 11 7V9H8.5C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V11H15.5C16.0523 11 16.5 10.5523 16.5 10C16.5 9.44772 16.0523 9 15.5 9H13V7Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.25"
            y1="3"
            x2="12.25"
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
