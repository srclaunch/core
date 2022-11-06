import { memo, ReactElement, SVGProps } from 'react';
export const Hide = memo(
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
          d="M7.50095 6.08514C4.98539 7.38359 3.39301 9.5472 2.60173 10.8666C2.17947 11.5708 2.17947 12.4292 2.60173 13.1334C3.79002 15.1148 6.78492 19 11.9999 19C14.6126 19 16.6681 18.0248 18.2183 16.8025L7.50095 6.08514Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M19.6822 15.438C20.4494 14.6012 21.0168 13.7693 21.3982 13.1334C21.8204 12.4292 21.8204 11.5708 21.3982 10.8666C20.2099 8.88521 17.215 5 11.9999 5C11.1202 5 10.3036 5.11057 9.54816 5.30393L19.6822 15.438Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M10.7077 9.29185C9.69769 9.77469 9 10.8059 9 12C9 13.6569 10.3431 15 12 15C13.1941 15 14.2253 14.3023 14.7081 13.2923L10.7077 9.29185Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.9999"
            y1="5"
            x2="11.9999"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="11.9999"
            y1="5"
            x2="11.9999"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11.8541"
            y1="9.29185"
            x2="11.8541"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
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
