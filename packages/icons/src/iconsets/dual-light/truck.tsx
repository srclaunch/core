import { memo, ReactElement, SVGProps } from 'react';
export const Truck = memo(
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
          d="M14 6H17.1459C18.2822 6 19.321 6.64201 19.8292 7.65836L21.6833 11.3666C21.8916 11.7831 22 12.2425 22 12.7082V15C22 16.6569 20.6569 18 19 18H14V6ZM16 8H17.1459C17.5247 8 17.8709 8.214 18.0403 8.55279L19.2639 11H16V8Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M2 7C2 5.34315 3.34315 4 5 4H13C14.6569 4 16 5.34315 16 7V18H5C3.34315 18 2 16.6569 2 15V7Z"
          fill="url(#paint1_linear)"
        />
        <circle cx="7" cy="18" r="2" fill="url(#paint2_linear)" />
        <circle cx="18" cy="18" r="2" fill="url(#paint3_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="18"
            y1="6"
            x2="18"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="9"
            y1="4"
            x2="9"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="7"
            y1="16"
            x2="7"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="18"
            y1="16"
            x2="18"
            y2="20"
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
