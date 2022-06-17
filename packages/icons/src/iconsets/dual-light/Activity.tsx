import { memo, ReactElement, SVGProps } from 'react';

export const Activity = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.489 5.054c-.113-.527-.865-.527-.978 0L7.317 10.63A3 3 0 014.383 13H3a1 1 0 110-2h1.383a1 1 0 00.978-.79l1.194-5.575C7.12 2 10.88 2 11.445 4.635l3.066 14.31c.113.528.865.528.978 0l1.194-5.574A3 3 0 0119.617 11H21a1 1 0 110 2h-1.383a1 1 0 00-.978.79l-1.194 5.575c-.565 2.635-4.325 2.635-4.89 0L9.49 5.055z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={12}
          y1={2.659}
          x2={12}
          y2={21.341}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
