import { memo, ReactElement, SVGProps } from 'react';

export const Message = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H8l-2.72 2.266C3.978 22.352 2 21.426 2 19.73V6z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="url(#prefix__paint2_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={3}
          x2={12}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={12}
          y1={8}
          x2={12}
          y2={10}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={10}
          y1={12}
          x2={10}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
