import { memo, ReactElement, SVGProps } from 'react';
export const Smile = memo(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.01565 13.0837C7.52174 12.8625 8.11126 13.0935 8.33238 13.5996C8.95054 15.0145 10.3613 16 12 16C13.6387 16 15.0494 15.0145 15.6676 13.5996C15.8887 13.0935 16.4782 12.8625 16.9843 13.0837C17.4904 13.3048 17.7214 13.8943 17.5003 14.4004C16.5753 16.5174 14.4619 18 12 18C9.53804 18 7.42463 16.5174 6.49967 14.4004C6.27855 13.8943 6.50957 13.3048 7.01565 13.0837Z"
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
            y1="12.9998"
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
