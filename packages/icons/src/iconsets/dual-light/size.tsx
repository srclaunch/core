import { memo, ReactElement, SVGProps } from 'react'; export const Size = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path
    d="M20 10C19.4477 10 19 9.55229 19 9V6.41417L6.41417 19H9C9.55228 19 10 19.4477 10 20C10 20.5523 9.55228 21 9 21H5C3.89543 21 3 20.1046 3 19V15C3 14.4477 3.44772 14 4 14C4.55228 14 5 14.4477 5 15V17.5857L17.5857 5L15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 9.55229 20.5523 10 20 10Z"
    fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M3 5C3 3.89543 3.89543 3 5 3H9C9.55228 3 10 3.44772 10 4C10 4.55228 9.55228 5 9 5H5V9C5 9.55228 4.55228 10 4 10C3.44772 10 3 9.55228 3 9V5Z"
    fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M21 19C21 20.1046 20.1046 21 19 21H15C14.4477 21 14 20.5523 14 20C14 19.4477 14.4477 19 15 19H19V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V19Z"
    fill="url(#paint2_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="6.5" y1="3" x2="6.5" y2="10" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="17.5" y1="21" x2="17.5" y2="14" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
