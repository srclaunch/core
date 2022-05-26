import { memo, ReactElement, SVGProps } from 'react';

export const Document = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 5a3 3 0 013-3h9.757a3 3 0 012.122.879L20.12 5.12A3 3 0 0121 7.243V19a3 3 0 01-3 3H6a3 3 0 01-3-3V5z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 11a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="url(#prefix__paint2_linear)"
      />
      <path
        d="M17.707 2.707l2.586 2.586C20.746 5.746 21 6.36 21 7h-3a2 2 0 01-2-2V2c.64 0 1.254.254 1.707.707z"
        fill="url(#prefix__paint3_linear)"
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
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={12}
          y1={10}
          x2={12}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={10}
          y1={14}
          x2={10}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear"
          x1={18.5}
          y1={2}
          x2={18.5}
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
