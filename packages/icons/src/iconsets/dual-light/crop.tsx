import { memo, ReactElement, SVGProps } from 'react'; export const Crop = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path
    d="M17 21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21L19 8C19 6.34315 17.6569 5 16 5L7 5V7L16 7C16.5523 7 17 7.44772 17 8L17 21Z"
    fill="url(#paint0_linear)" />
  <path d="M5 7V5L3 5C2.44772 5 2 5.44772 2 6C2 6.55229 2.44772 7 3 7L5 7Z" fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M22 18C22 18.5523 21.5523 19 21 19L8 19C6.34315 19 5 17.6569 5 16L5 3C5 2.44771 5.44772 2 6 2C6.55229 2 7 2.44771 7 3L7 16C7 16.5523 7.44772 17 8 17L21 17C21.5523 17 22 17.4477 22 18Z"
    fill="url(#paint2_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="10.5" y1="5" x2="10.5" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="10.5" y1="5" x2="10.5" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="13.5" y1="2" x2="13.5" y2="19" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
  </defs>
</svg>);});
