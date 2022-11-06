import { memo, ReactElement, SVGProps } from 'react';

export const Building = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 8h3a3 3 0 013 3v11h-6V8z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M4 7.342a3 3 0 012.272-2.91l6-1.5A3 3 0 0116 5.842V22H4V7.342z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 17a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        fill="url(#prefix__paint2_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        fill="url(#prefix__paint3_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        fill="url(#prefix__paint4_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 21a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
        fill="url(#prefix__paint5_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={17}
          y1={8}
          x2={17}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={10}
          y1={2}
          x2={10}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={10}
          y1={16}
          x2={10}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear"
          x1={10}
          y1={12}
          x2={10}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint4_linear"
          x1={10}
          y1={8}
          x2={10}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint5_linear"
          x1={12}
          y1={20}
          x2={12}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
