import { memo, ReactElement, SVGProps } from 'react';
export const Twitch = memo(
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
          d="M3 5C3 3.34315 4.34315 2 6 2H18C19.6569 2 21 3.34315 21 5V12.8488C21 13.5899 20.7257 14.3048 20.2299 14.8557L17.3938 18.0069C16.8249 18.639 16.0144 19 15.1639 19H12.3837C12.1367 19 11.8984 19.0914 11.7148 19.2567L8.66897 21.9979C8.02544 22.5771 7 22.1204 7 21.2546V19H6C4.34315 19 3 17.6569 3 16V5Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 7C10.5523 7 11 7.44772 11 8V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V8C9 7.44772 9.44772 7 10 7Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 7C15.5523 7 16 7.44772 16 8V12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12V8C14 7.44772 14.4477 7 15 7Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="23.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="10"
            y1="7"
            x2="10"
            y2="13"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="15"
            y1="7"
            x2="15"
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
