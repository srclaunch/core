import { memo, SVGProps, ReactElement } from 'react';

export const Dashboard = memo(
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
          d="M12 3C6.477 3 2 7.477 2 13c0 2.344.807 4.5 2.158 6.205.18.227.457.351.747.351h14.19c.29 0 .568-.124.747-.35A9.957 9.957 0 0022 13c0-5.523-4.477-10-10-10z"
          fill="url(#prefix__paint0_linear)"
        />
        <path
          d="M17.207 9.207a1 1 0 00-1.414-1.414l-3.275 3.275a2 2 0 101.414 1.414l3.275-3.275z"
          fill="url(#prefix__paint1_linear)"
        />
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={12}
            y1={3}
            x2={12}
            y2={19.556}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="prefix__paint1_linear"
            x1={13.75}
            y1={7.5}
            x2={13.75}
            y2={15}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset={1} stopColor="#5C5ACA" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
