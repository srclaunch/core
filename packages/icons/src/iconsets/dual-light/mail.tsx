import { memo, ReactElement, SVGProps } from 'react'; export const Mail = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="2" y="4" width="20" height="16" rx="3" fill="url(#paint0_linear)" />
  <path
    d="M10.91 12.2915L2 6.5C2 5.11929 3.11929 4 4.5 4H19.5C20.8807 4 22 5.11929 22 6.5L13.09 12.2915C12.4272 12.7223 11.5728 12.7223 10.91 12.2915Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="12" y1="4" x2="12" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
