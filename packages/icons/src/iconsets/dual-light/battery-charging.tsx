import { memo, ReactElement, SVGProps } from 'react'; export const BatteryCharging = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="6" y="5" width="12" height="17" rx="3" fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3Z"
    fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M13.7071 9.79289C14.0977 10.1834 14.0977 10.8166 13.7071 11.2071L12.4142 12.5H14C14.4045 12.5 14.7691 12.7436 14.9239 13.1173C15.0787 13.491 14.9931 13.9211 14.7071 14.2071L11.7071 17.2071C11.3166 17.5976 10.6834 17.5976 10.2929 17.2071C9.9024 16.8166 9.9024 16.1834 10.2929 15.7929L11.5858 14.5H10C9.59557 14.5 9.23093 14.2564 9.07615 13.8827C8.92137 13.509 9.00692 13.0789 9.29292 12.7929L12.2929 9.79289C12.6834 9.40237 13.3166 9.40237 13.7071 9.79289Z"
    fill="url(#paint2_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="5" x2="12" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="12" y1="2" x2="12" y2="4" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="12" y1="9.5" x2="12" y2="17.5" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
