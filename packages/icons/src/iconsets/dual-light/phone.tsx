import { memo, ReactElement, SVGProps } from 'react';
export const Phone = memo(
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
        <g clip-path="url(#clip0)">
          <path
            d="M2.89996 10.489C1.44046 7.83826 2.74822 4.82598 5.28873 3.18212V3.18212C6.32355 2.51253 7.70098 2.76584 8.42987 3.75979L9.9375 5.81565C10.6026 6.72262 10.7046 7.92542 10.2016 8.93138L9.79184 9.75084C9.67323 9.98805 9.65448 10.2625 9.77581 10.4983C9.99686 10.928 10.4676 11.6894 11.3744 12.5962C12.2812 13.503 13.0426 13.9737 13.4723 14.1948C13.7081 14.3161 13.9825 14.2973 14.2197 14.1787L15.0392 13.769C16.0451 13.266 17.2479 13.3679 18.1549 14.0331L20.2108 15.5407C21.2047 16.2696 21.458 17.647 20.7884 18.6818V18.6818C19.1446 21.2223 16.1323 22.5301 13.4816 21.0706C11.7516 20.1181 9.67124 18.6712 7.48528 16.4853C5.29932 14.2993 3.85249 12.219 2.89996 10.489Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2.53553"
            y1="4.46447"
            x2="19.5061"
            y2="21.435"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="100%" height="100%" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);
