import { memo, ReactElement, SVGProps } from 'react';
export const Download = memo(
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
          d="M13.0019 4.99959C13.0019 4.4473 12.5542 3.99959 12.0019 3.99959C11.4496 3.99959 11.0019 4.4473 11.0019 4.99959V13.0859L8.20894 10.2929C7.81841 9.90237 7.18525 9.90237 6.79472 10.2929C6.4042 10.6834 6.4042 11.3166 6.79472 11.7071L10.5877 15.5C11.3687 16.2811 12.635 16.2811 13.4161 15.5L17.2071 11.7091C17.5976 11.3185 17.5976 10.6854 17.2071 10.2948C16.8166 9.90432 16.1834 9.90432 15.7929 10.2948L13.0019 13.0858V4.99959Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 14C4.55228 14 5 14.4477 5 15V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V15C3 14.4477 3.44772 14 4 14Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.0009"
            y1="3.99959"
            x2="12.0009"
            y2="16.0858"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="14"
            x2="12"
            y2="20"
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
