import { memo, ReactElement, SVGProps } from 'react';
export const Sad = memo(
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
          d="M7.01565 16.9163C7.52174 17.1375 8.11126 16.9065 8.33238 16.4004C8.95054 14.9855 10.3613 14 12 14C13.6387 14 15.0494 14.9855 15.6676 16.4004C15.8887 16.9065 16.4782 17.1375 16.9843 16.9163C17.4904 16.6952 17.7214 16.1057 17.5003 15.5996C16.5753 13.4826 14.4619 12 12 12C9.53804 12 7.42463 13.4826 6.49967 15.5996C6.27855 16.1057 6.50957 16.6952 7.01565 16.9163Z"
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
            y1="17.0002"
            x2="12"
            y2="12"
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
