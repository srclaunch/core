import { memo, ReactElement, SVGProps } from 'react';
export const Presentation = memo(
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
          d="M12 14C12.5523 14 13 14.4477 13 15V16.5858L16.7071 20.2929C17.0976 20.6834 17.0976 21.3166 16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071L13 19.4142V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V19.4142L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071C6.90237 21.3166 6.90237 20.6834 7.29289 20.2929L11 16.5858V15C11 14.4477 11.4477 14 12 14Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M2 4H22V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V4Z"
          fill="url(#paint1_linear)"
        />
        <circle cx="8" cy="10" r="3" fill="url(#paint2_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3C23 3.55228 22.5523 4 22 4H2C1.44772 4 1 3.55228 1 3Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 8C14 7.44772 14.4477 7 15 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H15C14.4477 9 14 8.55228 14 8Z"
          fill="url(#paint4_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 12C14 11.4477 14.4477 11 15 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H15C14.4477 13 14 12.5523 14 12Z"
          fill="url(#paint5_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="14"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="8"
            y1="7"
            x2="8"
            y2="13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="16.5"
            y1="7"
            x2="16.5"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="16.5"
            y1="11"
            x2="16.5"
            y2="13"
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
