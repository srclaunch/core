import { memo, ReactElement, SVGProps } from 'react';
export const Filter = memo(
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
          d="M20 2H4C2.89543 2 2 2.89543 2 4V5.42191C2 6.4098 2.48635 7.33437 3.30041 7.89403L10 12.5V20.3415C10 21.0945 10.8008 21.5774 11.4668 21.2259L13.4668 20.1703C13.7947 19.9972 14 19.6568 14 19.2859V12.5L20.6996 7.89403C21.5137 7.33437 22 6.4098 22 5.42191V4C22 2.89543 21.1046 2 20 2Z"
          fill="url(#paint0_linear)"
        />
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
        </defs>
      </svg>
    );
  },
);
