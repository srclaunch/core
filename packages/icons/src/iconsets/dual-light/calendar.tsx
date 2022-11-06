import { memo, ReactElement, SVGProps } from 'react'; export const Calendar = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="2" y="4" width="20" height="18" rx="3" fill="url(#paint0_linear)" />
  <path d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V10H2V7Z" fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M7 2C7.55228 2 8 2.44772 8 3V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2Z"
    fill="url(#paint2_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M17 2C17.5523 2 18 2.44772 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.44772 16.4477 2 17 2Z"
    fill="url(#paint3_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="4" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="12" y1="4" x2="12" y2="10" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="7" y1="2" x2="7" y2="6" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint3_linear" x1="17" y1="2" x2="17" y2="6" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
  </defs>
</svg>);});
