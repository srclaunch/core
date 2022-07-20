import { memo, ReactElement, SVGProps } from 'react'; export const ColorPalette = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path fillRule="evenodd" clipRule="evenodd"
    d="M19.7866 14C20.9581 14 22 13.1714 22 12V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22V22C13.1714 22 14 20.9581 14 19.7866V18C14 15.7909 15.7909 14 18 14H19.7866Z"
    fill="url(#paint0_linear)" />
  <circle cx="11.5" cy="6" r="1.5" fill="url(#paint1_linear)" />
  <circle cx="17.5" cy="9.5" r="1.5" fill="url(#paint2_linear)" />
  <circle cx="6.5" cy="10" r="1.5" fill="url(#paint3_linear)" />
  <circle cx="8" cy="16.5" r="1.5" fill="url(#paint4_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="11.5" y1="4.5" x2="11.5" y2="7.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="17.5" y1="8" x2="17.5" y2="11" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint3_linear" x1="6.5" y1="8.5" x2="6.5" y2="11.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint4_linear" x1="8" y1="15" x2="8" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
