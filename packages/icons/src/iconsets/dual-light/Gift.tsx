import { memo, ReactElement, SVGProps } from 'react';

export const Gift = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 12.874V19a3 3 0 003 3h12a3 3 0 003-3v-6.126A4.01 4.01 0 0120 13H4a4.01 4.01 0 01-1-.126z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M2 8a2 2 0 012-2h16a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"
        fill="url(#prefix__paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.5l-1.189-1.486A2.702 2.702 0 008.701 1H8.5a2.5 2.5 0 000 5H11v16h2V6h2.5a2.5 2.5 0 000-5h-.202c-.82 0-1.596.373-2.11 1.014L12 3.5zM9.839 4l-.59-.737A.702.702 0 008.702 3H8.5a.5.5 0 000 1h1.339zm4.322 0l.59-.737A.701.701 0 0115.298 3h.202a.5.5 0 010 1h-1.339z"
        fill="url(#prefix__paint2_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={12.874}
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
          y1={6}
          x2={12}
          y2={11}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={12}
          y1={1}
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
