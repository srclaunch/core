import { memo, ReactElement, SVGProps } from 'react'; export const Mouse = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="5" y="2" width="14" height="20" rx="7" fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M12 6C12.5523 6 13 6.44772 13 7L13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10L11 7C11 6.44771 11.4477 6 12 6Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="13" y1="8.5" x2="11" y2="8.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
