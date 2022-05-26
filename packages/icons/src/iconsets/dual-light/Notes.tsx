import { memo, ReactElement, SVGProps } from 'react'; export const Notes = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="2" y="5" width="16" height="10" rx="3" fill="url(#paint0_linear)" />
  <rect x="6" y="9" width="16" height="10" rx="3" fill="url(#paint1_linear)" />
  <circle cx="14" cy="14" r="2" fill="url(#paint2_linear)" />
  <circle cx="9" cy="14" r="1" fill="url(#paint3_linear)" />
  <circle cx="19" cy="14" r="1" fill="url(#paint4_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="10" y1="5" x2="10" y2="15" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="14" y1="9" x2="14" y2="19" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="14" y1="12" x2="14" y2="16" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint3_linear" x1="9" y1="13" x2="9" y2="15" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint4_linear" x1="19" y1="13" x2="19" y2="15" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
