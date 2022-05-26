import { memo, ReactElement, SVGProps } from 'react';
export const Drop = memo(
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
          d="M18.2725 8.94348C19.3752 10.319 20.0348 12.0651 20.0348 13.9652C20.0348 18.4027 16.4375 22 12 22C7.5625 22 3.96521 18.4027 3.96521 13.9652C3.96521 12.0651 4.62478 10.319 5.72747 8.94348L5.73397 8.93538C5.73397 8.93538 8.52282 5.20153 10.6792 2.56137C11.3689 1.71688 12.6313 1.71655 13.3215 2.56071C15.4847 5.20669 18.2772 8.94348 18.2772 8.94348H18.2725Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.90112 14.02C7.44236 13.9101 7.9702 14.2598 8.08006 14.8011C8.39785 16.3666 9.63342 17.6022 11.199 17.92C11.7402 18.0298 12.0899 18.5577 11.98 19.0989C11.8702 19.6402 11.3423 19.9899 10.8011 19.88C8.44838 19.4024 6.59761 17.5517 6.12004 15.1989C6.01017 14.6577 6.35987 14.1299 6.90112 14.02Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="22"
            x2="12"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="9.05004"
            y1="13.9998"
            x2="9.05004"
            y2="19.9002"
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
