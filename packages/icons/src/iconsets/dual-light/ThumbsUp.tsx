import { memo, ReactElement, SVGProps } from 'react';
export const ThumbsUp = memo(
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
          d="M2 15C2 13.3431 3.34315 12 5 12H7V22H5C3.34315 22 2 20.6569 2 19V15Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M22.3788 12.4876C22.6944 11.2256 21.7402 10.0029 20.4393 10.0024L14.5 10L15.049 6.70618C15.3145 5.11294 14.469 3.54176 12.9929 2.88576V2.88576C12.0557 2.4692 11 3.15526 11 4.18092V5.94766C11 6.62887 10.7682 7.2898 10.3426 7.82174L7 12V22H17.6578C19.0344 22 20.2343 21.0632 20.5682 19.7278L22.3788 12.4876Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4.5"
            y1="12"
            x2="4.5"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="15"
            y1="2"
            x2="15"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
