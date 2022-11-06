import { memo, ReactElement, SVGProps } from 'react'; export const Diamond = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path
    d="M1.84023 7.1842L4.76734 3.21844C5.3329 2.45219 6.22869 2 7.18106 2H16.8189C17.7713 2 18.6671 2.45219 19.2327 3.21844L22.1598 7.1842C22.9535 8.25957 22.9401 9.73033 22.1269 10.791L14.3808 20.8946C13.18 22.4609 10.82 22.4609 9.61918 20.8946L1.87314 10.791C1.05992 9.73033 1.0465 8.25957 1.84023 7.1842Z"
    fill="url(#paint0_linear)" />
  <path
    d="M22.7458 9H1.2541C1.24684 8.36315 1.44181 7.72409 1.83994 7.18453V7.18453L4.76729 3.21844C5.33285 2.45219 6.22864 2 7.18101 2H16.8189C17.7713 2 18.667 2.45219 19.2326 3.21844L22.1597 7.1842L22.1607 7.18557C22.5583 7.72491 22.7531 8.36356 22.7458 9Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="24" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="12" y1="2" x2="12" y2="9" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
