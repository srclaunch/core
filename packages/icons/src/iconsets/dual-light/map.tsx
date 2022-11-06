import { memo, ReactElement, SVGProps } from 'react';
export const Map = memo(
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
          d="M8.14074 3.23568L4.20645 4.3148C2.90334 4.67223 2 5.85671 2 7.20795V17.7219C2 19.3719 3.57012 20.5693 5.16129 20.1329L8.14073 19.3157C8.70147 19.1619 9.29483 19.1743 9.84861 19.3516L14.1514 20.7284C14.7052 20.9057 15.2985 20.9181 15.8593 20.7643L19.7936 19.6852C21.0967 19.3278 22 18.1433 22 16.7921V6.27805C22 4.62811 20.4299 3.43066 18.8387 3.8671L15.8593 4.68432C15.2985 4.83812 14.7052 4.82566 14.1514 4.64845L9.84861 3.27156C9.29483 3.09434 8.70147 3.08188 8.14074 3.23568Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M15 4.79045V20.8705C14.7133 20.8642 14.4274 20.8168 14.1514 20.7284L9.84861 19.3516C9.57259 19.2632 9.28674 19.2158 9 19.2095V3.12955C9.28674 3.13583 9.57259 3.18323 9.84861 3.27156L14.1514 4.64845C14.4274 4.73677 14.7133 4.78417 15 4.79045Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="3.12955"
            x2="12"
            y2="20.8705"
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
