import { memo, ReactElement, SVGProps } from 'react'; export const PieChart = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path fillRule="evenodd" clipRule="evenodd"
    d="M10 6C8.41775 6 6.87104 6.46919 5.55544 7.34824C4.23985 8.22729 3.21447 9.47672 2.60897 10.9385C2.00347 12.4003 1.84504 14.0089 2.15372 15.5607C2.4624 17.1126 3.22433 18.538 4.34315 19.6569C5.46197 20.7757 6.88743 21.5376 8.43928 21.8463C9.99113 22.155 11.5997 21.9965 13.0615 21.391C14.5233 20.7855 15.7727 19.7602 16.6518 18.4446C17.5308 17.129 18 15.5823 18 14C18 13.4477 17.5523 13 17 13H12C11.4477 13 11 12.5523 11 12V7C11 6.44772 10.5523 6 10 6Z"
    fill="url(#paint0_linear)" />
  <path
    d="M14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11L21 11C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10C22 7.87827 21.1571 5.84344 19.6569 4.34314C18.1566 2.84285 16.1217 2 14 2Z"
    fill="url(#paint1_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="10" y1="6" x2="10" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="17.5" y1="2" x2="17.5" y2="11" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
