import { memo, ReactElement, SVGProps } from 'react';
export const Laugh = memo(
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
        <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
        <path
          d="M6.14944 14.0324C6.67592 16.1447 8.56055 18 12 18C15.4395 18 17.3242 16.1447 17.8506 14.0324C17.9883 13.4798 17.5246 13 16.9551 13H7.04494C6.47541 13 6.01171 13.4798 6.14944 14.0324Z"
          fill="url(#paint1_linear)"
        />
        <circle cx="8" cy="9" r="1" fill="url(#paint2_linear)" />
        <circle cx="16" cy="9" r="1" fill="url(#paint3_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="13"
            x2="12"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="8"
            y1="8"
            x2="8"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="16"
            y1="8"
            x2="16"
            y2="10"
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
