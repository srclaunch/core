import { memo, ReactElement, SVGProps } from 'react'; export const Photos = memo((props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <rect x="2" y="6" width="16" height="16" rx="3" fill="url(#paint0_linear)" />
  <rect x="6" y="2" width="16" height="16" rx="3" fill="url(#paint1_linear)" />
  <circle cx="17.5" cy="6.5" r="1.5" fill="url(#paint2_linear)" />
  <path
    d="M19.7954 15.6061C19.7648 15.5654 19.7316 15.5254 19.6959 15.4864L13.319 8.52987C12.0918 7.19102 9.96566 7.24121 8.80293 8.63649L8 9.6V15C8 15.5523 8.44772 16 9 16H19C19.3244 16 19.6127 15.8455 19.7954 15.6061Z"
    fill="url(#paint3_linear)" />
  <defs>
    <linearGradient id="paint0_linear" x1="10" y1="6" x2="10" y2="22" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint1_linear" x1="14" y1="2" x2="14" y2="18" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" />
      <stop offset="1" stopColor="#D1DAEE" />
    </linearGradient>
    <linearGradient id="paint2_linear" x1="17.5" y1="5" x2="17.5" y2="8" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
    <linearGradient id="paint3_linear" x1="13.8977" y1="7.55704" x2="13.8977" y2="16" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6073D8" />
      <stop offset="1" stopColor="#5C5ACA" />
    </linearGradient>
  </defs>
</svg>);});
