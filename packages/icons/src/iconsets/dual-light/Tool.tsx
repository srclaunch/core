import { memo, ReactElement, SVGProps } from 'react';

export const Tool = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.999 10.158l2.828 2.829-7.07 7.07a2 2 0 01-2.83-2.828L11 10.16z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M16.829 4.328c.488-.488.338-1.31-.337-1.453a6 6 0 104.618 4.618c-.143-.675-.965-.824-1.453-.336L18.07 8.744a2 2 0 11-2.829-2.829l1.588-1.587z"
        fill="url(#prefix__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={8.585}
          y1={10.158}
          x2={8.585}
          y2={20.643}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset={1} stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={15.242}
          y1={2.744}
          x2={15.242}
          y2={14.744}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
