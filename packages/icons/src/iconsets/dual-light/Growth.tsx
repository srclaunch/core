import { memo, ReactElement, SVGProps } from 'react';

export const Growth = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2a1 1 0 011 1v16a1 1 0 001 1h16a1 1 0 110 2H5a3 3 0 01-3-3V3a1 1 0 011-1z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M17 6.5a1 1 0 100 2h1.586L14.5 12.586 11.914 10a2 2 0 00-2.828 0l-2.793 2.793a1 1 0 101.414 1.414l2.793-2.793L13.086 14a2 2 0 002.828 0L20 9.914V11.5a1 1 0 102 0v-4a1 1 0 00-1-1h-4z"
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
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={14}
          y1={6.5}
          x2={14}
          y2={14.586}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
