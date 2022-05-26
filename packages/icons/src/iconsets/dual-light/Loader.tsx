import { memo, ReactElement, SVGProps } from 'react'; export const Loader = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path fillRule="evenodd" clipRule="evenodd"
    d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z"
    fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z"
    fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M4.92891 4.92893C5.31943 4.53841 5.9526 4.53841 6.34312 4.92893L7.75734 6.34315C8.14786 6.73367 8.14786 7.36684 7.75734 7.75736C7.36681 8.14788 6.73365 8.14788 6.34312 7.75736L4.92891 6.34315C4.53838 5.95262 4.53838 5.31946 4.92891 4.92893Z"
    fill="url(#paint2_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M16.2426 16.2426C16.6332 15.8521 17.2663 15.8521 17.6568 16.2426L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6568 19.0711L16.2426 17.6569C15.8521 17.2663 15.8521 16.6332 16.2426 16.2426Z"
    fill="url(#paint3_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M2 12C2 11.4477 2.44772 11 3 11L5 11C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13L3 13C2.44772 13 2 12.5523 2 12Z"
    fill="url(#paint4_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M18 12C18 11.4477 18.4477 11 19 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L19 13C18.4477 13 18 12.5523 18 12Z"
    fill="url(#paint5_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M4.92888 19.0711C4.53836 18.6805 4.53836 18.0474 4.92888 17.6569L6.34309 16.2426C6.73362 15.8521 7.36678 15.8521 7.75731 16.2426C8.14783 16.6332 8.14783 17.2663 7.75731 17.6569L6.34309 19.0711C5.95257 19.4616 5.3194 19.4616 4.92888 19.0711Z"
    fill="url(#paint6_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M16.2426 7.75736C15.8521 7.36684 15.8521 6.73367 16.2426 6.34315L17.6568 4.92894C18.0473 4.53841 18.6805 4.53841 19.071 4.92894C19.4616 5.31946 19.4616 5.95263 19.071 6.34315L17.6568 7.75736C17.2663 8.14789 16.6331 8.14789 16.2426 7.75736Z"
    fill="url(#paint7_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="6" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="12" y1="18" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="4.92891" y1="4.92893" x2="7.75734" y2="7.75736"
      gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint3_linear" x1="16.2426" y1="16.2426" x2="19.0711" y2="19.0711"
      gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint4_linear" x1="2" y1="12" x2="6" y2="12" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint5_linear" x1="18" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint6_linear" x1="4.92888" y1="19.0711" x2="7.75731" y2="16.2426"
      gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint7_linear" x1="16.2426" y1="7.75736" x2="19.071" y2="4.92894"
      gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
