import { memo, ReactElement, SVGProps } from 'react';

export const Warning = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.394 4.574c1.15-2.02 4.062-2.02 5.213 0l6.805 11.94c1.14 2-.305 4.486-2.607 4.486H5.195c-2.302 0-3.746-2.485-2.606-4.485L9.394 4.574z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14a1 1 0 001-1V8a1 1 0 10-2 0v5a1 1 0 001 1z"
        fill="url(#prefix__paint1_linear)"
      />
      <circle cx={12} cy={17} r={1} fill="url(#prefix__paint2_linear)" />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={0}
          x2={12}
          y2={21}
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
          y2={7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={12}
          y1={16}
          x2={12}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
