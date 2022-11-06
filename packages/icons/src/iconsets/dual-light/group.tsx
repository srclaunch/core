import { memo, SVGProps, ReactElement } from 'react';

export const Group = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={14} cy={7} r={4} fill="url(#prefix__paint0_linear)" />
      <path
        d="M12 13a6 6 0 00-6 6 2 2 0 002 2h12a2 2 0 002-2v-1a5 5 0 00-5-5h-5z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        d="M7 13a5 5 0 00-5 5v1a2 2 0 002 2h12a2 2 0 002-2v-1a5 5 0 00-5-5H7z"
        fill="url(#prefix__paint2_linear)"
      />
      <circle cx={10} cy={7} r={4} fill="url(#prefix__paint3_linear)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={14}
          y1={3}
          x2={14}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={14}
          y1={13}
          x2={14}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={10}
          y1={13}
          x2={10}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear"
          x1={10}
          y1={3}
          x2={10}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
