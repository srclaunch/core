import { memo, ReactElement, SVGProps } from 'react';
export const Box = memo(
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
          d="M7.3798 2C6.50403 2 5.67198 2.38269 5.10204 3.04763L2.72223 5.82406C2.25618 6.36779 2 7.06031 2 7.77644V8V9V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9V8V7.77644C22 7.06031 21.7438 6.36779 21.2778 5.82406L18.898 3.04763C18.328 2.38269 17.496 2 16.6202 2H7.3798Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M21.8978 7H2.10221C2.03485 7.25141 2 7.51232 2 7.77644V9H22V7.77644C22 7.51232 21.9652 7.25141 21.8978 7Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M10.3333 2H13.6667L15.8124 6.59793C15.936 6.86276 16 7.15145 16 7.4437V12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12V7.4437C8 7.15145 8.06405 6.86276 8.18763 6.59793L10.3333 2Z"
          fill="url(#paint2_linear)"
        />
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
            y1="7"
            x2="12"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="2"
            x2="12"
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
