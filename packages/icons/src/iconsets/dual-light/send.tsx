import { memo, ReactElement, SVGProps } from 'react';

export const Send = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.1928 6.57843C1.36183 4.08552 3.91013 1.80468 6.29603 2.90587L20.0983 9.27616C22.422 10.3487 22.422 13.6514 20.0983 14.7239L6.29603 21.0941C3.91013 22.1953 1.36184 19.9145 2.19281 17.4216L3.68377 12.9487C3.88904 12.3329 3.88904 11.6672 3.68377 11.0514L2.1928 6.57843Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M3.66677 13L3.68387 12.9487C3.88913 12.3329 3.88913 11.6672 3.68387 11.0514L3.66675 11H14.0001C14.5524 11 15.0001 11.4477 15.0001 12C15.0001 12.5523 14.5524 13 14.0001 13H3.66677Z"
          fill="url(#paint1_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="13"
          y1="0"
          x2="13"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="9.33342"
          y1="11"
          x2="9.33342"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="100%" height="100%" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
