import { memo, ReactElement, SVGProps } from 'react';
export const Heart = memo(
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
          d="M11.8003 5.21366C9.55838 2.92878 5.91553 2.92878 3.67364 5.21366C1.44212 7.48794 1.44212 11.1676 3.67364 13.4419L9.85864 19.7454C11.0346 20.944 12.9654 20.944 14.1414 19.7454L20.3264 13.4419C22.5579 11.1676 22.5579 7.48794 20.3264 5.21366C18.0845 2.92878 14.4416 2.92878 12.1997 5.21366L12 5.41721L11.8003 5.21366Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M19 9.5C19 7.84315 17.6569 6.5 16 6.5"
          stroke="url(#paint1_linear)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3.5"
            x2="12"
            y2="20.6443"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="17.5"
            y1="6.5"
            x2="17.5"
            y2="9.5"
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
