import { memo, ReactElement, SVGProps } from 'react'; export const PlayCircle = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
  <path
    d="M15.3923 10.268C16.7256 11.0378 16.7256 12.9623 15.3923 13.7321L11 16.268C9.66667 17.0378 8 16.0755 8 14.5359L8 9.4641C8 7.9245 9.66667 6.96225 11 7.73205L15.3923 10.268Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="13.1962" y1="6" x2="13.1962" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
