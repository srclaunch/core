import { memo, ReactElement, SVGProps } from 'react'; export const Cart = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path fillRule="evenodd" clipRule="evenodd"
    d="M2 4C2 3.44772 2.44772 3 3 3H3.43845C4.81505 3 6.015 3.93689 6.34888 5.27239L6.53078 6H18.5068C20.426 6 21.8517 7.77725 21.4353 9.65079L20.3242 14.6508C20.0192 16.0234 18.8018 17 17.3957 17H9.56155C8.18495 17 6.985 16.0631 6.65112 14.7276L4.40859 5.75746C4.2973 5.3123 3.89731 5 3.43845 5H3C2.44772 5 2 4.55228 2 4Z"
    fill="url(#paint0_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M9.5 21C10.3284 21 11 20.3284 11 19.5C11 18.6716 10.3284 18 9.5 18C8.67157 18 8 18.6716 8 19.5C8 20.3284 8.67157 21 9.5 21Z"
    fill="url(#paint1_linear)" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
    fill="url(#paint2_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="11.754" y1="3" x2="11.754" y2="17" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="9.5" y1="18" x2="9.5" y2="21" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="17.5" y1="18" x2="17.5" y2="21" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
