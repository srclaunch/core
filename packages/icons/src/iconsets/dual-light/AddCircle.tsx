import { memo, ReactElement, SVGProps } from 'react';

export const AddCircle = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement => {
    return (
      <svg height="100%" width="100%" fill="none" {...props}>
        <circle cx={12} cy={12} r={10} fill="url(#prefix__paint0_linear)" />
        <path
          d="M13 8a1 1 0 10-2 0v3H8a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V8z"
          fill="url(#prefix__paint1_linear)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={12}
            y1={2}
            x2={12}
            y2={22}
            gradientUnits="userSpaceOnUse"
          >
            <stop className="prefix__stopColor-1" stopColor="#fff" />
            <stop
              className="prefix__stopColor-2"
              offset={1}
              stopColor="#D1DAEE"
            />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={12}
            y1={7}
            x2={12}
            y2={17}
            gradientUnits="userSpaceOnUse"
          >
            <stop className="prefix__stopColor-3" stopColor="#6073D8" />
            <stop
              className="prefix__stopColor-4"
              offset={1}
              stopColor="#5C5ACA"
            />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
