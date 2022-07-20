import { memo, ReactElement, SVGProps } from 'react'; export const ChevronLeft = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path fillRule="evenodd" clipRule="evenodd"
    d="M15.7071 19.2071C16.0976 18.8166 16.0976 18.1834 15.7071 17.7929L9.91421 12L15.7071 6.20711C16.0976 5.81658 16.0976 5.18342 15.7071 4.79289C15.3166 4.40237 14.6834 4.40237 14.2929 4.79289L8.5 10.5858C7.71895 11.3668 7.71895 12.6332 8.5 13.4142L14.2929 19.2071C14.6834 19.5976 15.3166 19.5976 15.7071 19.2071Z"
    fill="url(#paint0_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="16" y1="12" x2="7.91421" y2="12" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
  </defs>
</svg>);});
