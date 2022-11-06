import { memo, ReactElement, SVGProps } from 'react';
export const Schedule = memo(
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
        <rect
          x="2"
          y="4"
          width="20"
          height="18"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <circle cx="17" cy="17" r="6" fill="url(#paint1_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 14C17.5523 14 18 14.4477 18 15V16.5858L19.2071 17.7929C19.5976 18.1834 19.5976 18.8166 19.2071 19.2071C18.8166 19.5976 18.1834 19.5976 17.7929 19.2071L16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V15C16 14.4477 16.4477 14 17 14Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 2C7.55228 2 8 2.44772 8 3V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5V3C6 2.44772 6.44772 2 7 2Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 2C17.5523 2 18 2.44772 18 3V5C18 5.55228 17.5523 6 17 6C16.4477 6 16 5.55228 16 5V3C16 2.44772 16.4477 2 17 2Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="17"
            y1="11"
            x2="17"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="17.75"
            y1="14"
            x2="17.75"
            y2="19.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="7"
            y1="2"
            x2="7"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="17"
            y1="2"
            x2="17"
            y2="6"
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
