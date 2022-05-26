import { memo, ReactElement, SVGProps } from 'react';
export const Android = memo(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.00391 5.63174C5.48343 5.35773 6.09428 5.52433 6.36829 6.00385L8.36829 9.50385C8.6423 9.98337 8.47571 10.5942 7.99619 10.8682C7.51667 11.1422 6.90582 10.9756 6.63181 10.4961L4.63181 6.99613C4.3578 6.51661 4.52439 5.90575 5.00391 5.63174Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9961 5.63174C18.5166 5.35773 17.9057 5.52433 17.6317 6.00385L15.6317 9.50385C15.3577 9.98337 15.5243 10.5942 16.0038 10.8682C16.4833 11.1422 17.0942 10.9756 17.3682 10.4961L19.3682 6.99613C19.6422 6.51661 19.4756 5.90575 18.9961 5.63174Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M12 8C6.81417 8 2.55031 11.9474 2.04924 17.0014C1.99475 17.551 2.44772 18 3 18H21C21.5523 18 22.0053 17.551 21.9508 17.0014C21.4497 11.9474 17.1858 8 12 8Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15V15Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M16 15C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15V15Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="6.50005"
            y1="5.49982"
            x2="6.50005"
            y2="11.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="17.5"
            y1="5.49982"
            x2="17.5"
            y2="11.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="8"
            x2="12"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="8"
            y1="13"
            x2="8"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="16"
            y1="13"
            x2="16"
            y2="15"
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
