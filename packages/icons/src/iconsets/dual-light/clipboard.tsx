import { memo, ReactElement, SVGProps } from 'react'; export const Clipboard = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="3" y="3" width="18" height="19" rx="3" fill="url(#paint0_linear)" />
  <path
    d="M14 3C14 1.89543 13.1046 1 12 1C10.8954 1 10 1.89543 10 3H8V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3H14Z"
    fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M7 11C7 10.4477 7.44772 10 8 10L16 10C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12L8 12C7.44772 12 7 11.5523 7 11Z"
    fill="url(#paint2_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M7 15C7 14.4477 7.44772 14 8 14L12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16L8 16C7.44772 16 7 15.5523 7 15Z"
    fill="url(#paint3_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="3" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="12" y1="1" x2="12" y2="6" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="12" y1="10" x2="12" y2="12" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint3_linear" x1="10" y1="14" x2="10" y2="16" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
