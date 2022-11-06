import { memo, ReactElement, SVGProps } from 'react';

export const Home = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11.336a3 3 0 01.993-2.23l7-6.3a3 3 0 014.014 0l7 6.3a3 3 0 01.993 2.23V19a3 3 0 01-3 3H5a3 3 0 01-3-3v-7.664z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M9 16a2 2 0 012-2h2a2 2 0 012 2v6H9v-6z"
        fill="url(#prefix__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={2.036}
          x2={12}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={12}
          y1={14}
          x2={12}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
