import { memo, ReactElement, SVGProps } from 'react'; export const ArrowLeft = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path fillRule="evenodd" clipRule="evenodd"
    d="M21 12C21 11.4477 20.5523 11 20 11L4.5 11C3.94772 11 3.5 11.4477 3.5 12C3.5 12.5523 3.94772 13 4.5 13L20 13C20.5523 13 21 12.5523 21 12Z"
    fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M10.7071 19.2071C11.0976 18.8166 11.0976 18.1834 10.7071 17.7929L4.91421 12L10.7071 6.20711C11.0976 5.81658 11.0976 5.18342 10.7071 4.79289C10.3166 4.40237 9.68342 4.40237 9.29289 4.79289L3.5 10.5858C2.71895 11.3668 2.71895 12.6332 3.5 13.4142L9.29289 19.2071C9.68342 19.5976 10.3166 19.5976 10.7071 19.2071Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="21" y1="12" x2="3.5" y2="12" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="11" y1="12" x2="2.91421" y2="12" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
  </defs>
</svg>);});
