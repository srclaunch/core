import { memo, ReactElement, SVGProps } from 'react';
export const Edit = memo(
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
          d="M3.98549 21.1911L8.9919 20.1898C9.37908 20.1124 9.73468 19.9221 10.0139 19.6429L18.0666 11.5901L12.4098 5.93329L4.35702 13.986C4.07782 14.2652 3.88751 14.6208 3.81007 15.008L2.80879 20.0144C2.66885 20.7141 3.28577 21.3311 3.98549 21.1911Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M20.1924 5.22182L18.7782 3.8076C17.6067 2.63603 15.7072 2.63603 14.5356 3.80761L12.4099 5.93328L18.0668 11.5901L20.1924 9.46446C21.364 8.29288 21.364 6.39339 20.1924 5.22182Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10.4277"
            y1="5.93329"
            x2="10.4277"
            y2="21.2111"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="16.7405"
            y1="2.92892"
            x2="16.7405"
            y2="11.5901"
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
