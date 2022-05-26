import { memo, ReactElement, SVGProps } from 'react';
export const FastRight = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M10.8 9.60003C12.4 10.8 12.4 13.2 10.8 14.4L6.8 17.4C4.82229 18.8833 2 17.4722 2 15V9.00003C2 6.52789 4.82229 5.11675 6.8 6.60003L10.8 9.60003Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M20.8 9.6C22.4 10.8 22.4 13.2 20.8 14.4L16.8 17.4C14.8223 18.8833 12 17.4721 12 15V9C12 6.52786 14.8223 5.11672 16.8 6.6L20.8 9.6Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="8"
            y1="3.00003"
            x2="8"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18"
            y1="3"
            x2="18"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
