import { memo, ReactElement, SVGProps } from 'react';
export const Gamepad = memo(
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
          d="M12 3C12.5523 3 13 3.44772 13 4V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V4C11 3.44772 11.4477 3 12 3Z"
          fill="url(#paint0_linear)"
        />
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13ZM20 12C20 13.6569 18.6569 15 17 15C15.3431 15 14 13.6569 14 12C14 10.3431 15.3431 9 17 9C18.6569 9 20 10.3431 20 12Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 10C8 9.44772 7.55228 9 7 9C6.44772 9 6 9.44772 6 10V11L5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H6V14C6 14.5523 6.44772 15 7 15C7.55228 15 8 14.5523 8 14V13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11H8V10Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="17"
            y1="9"
            x2="17"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="7"
            y1="9"
            x2="7"
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
