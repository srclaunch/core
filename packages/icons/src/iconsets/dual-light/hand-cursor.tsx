import { memo, ReactElement, SVGProps } from 'react';
export const HandCursor = memo(
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
          d="M18.6508 11.478L12 10V3.99305C12 2.89232 11.1077 2 10.0069 2C8.90621 2 8.01388 2.89232 8.01388 3.99305V15L6.65093 12.6231C5.68971 10.9468 3.17615 11.2954 2.70748 13.1701C2.57426 13.703 2.65046 14.2667 2.92039 14.7451L6.15298 20.4742C6.68489 21.4169 7.68337 22 8.76577 22H18C19.6569 22 21 20.6569 21 19V14.4065C21 13.0004 20.0234 11.783 18.6508 11.478Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.75"
            y1="2"
            x2="11.75"
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
