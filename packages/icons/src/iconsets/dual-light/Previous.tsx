import { memo, ReactElement, SVGProps } from 'react'; export const Previous = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path
    d="M8.39586 9.4142C6.42395 10.5741 6.42395 13.4259 8.39586 14.5858L16.4789 19.3406C18.4788 20.517 21 19.075 21 16.7548V7.24525C21 4.925 18.4788 3.48304 16.4789 4.65945L8.39586 9.4142Z"
    fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M4 4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20C4.55228 20 5 19.5523 5 19V5C5 4.44772 4.55228 4 4 4Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12.5" y1="2" x2="12.5" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="4" y1="4" x2="4" y2="20" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
