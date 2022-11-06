import { memo, ReactElement, SVGProps } from 'react';

export const ChevronDoubleRight = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.543 19.207a1 1 0 010-1.414L17.336 12l-5.793-5.793a1 1 0 011.414-1.414l5.793 5.793a2 2 0 010 2.828l-5.793 5.793a1 1 0 01-1.414 0z"
          fill="url(#prefix__paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.293 19.207a1 1 0 010-1.414L11.086 12 5.293 6.207a1 1 0 011.414-1.414l5.793 5.793a2 2 0 010 2.828l-5.793 5.793a1 1 0 01-1.414 0z"
          fill="url(#prefix__paint1_linear)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={11.25}
            y1={12}
            x2={19.336}
            y2={12}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset={1} stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={5}
            y1={12}
            x2={13.086}
            y2={12}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#D1DAEE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
