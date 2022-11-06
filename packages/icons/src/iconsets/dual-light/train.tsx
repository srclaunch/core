import { memo, ReactElement, SVGProps } from 'react';
export const Train = memo(
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
          d="M14 1C14.5523 1 15 1.44772 15 2H18C19.6569 2 21 3.34315 21 5V15C21 16.6569 19.6569 18 18 18H6C4.34315 18 3 16.6569 3 15V5C3 3.34315 4.34315 2 6 2H9C9 1.44772 9.44772 1 10 1H14Z"
          fill="url(#paint0_linear)"
        />
        <circle cx="6" cy="15" r="1" fill="url(#paint1_linear)" />
        <circle cx="18" cy="15" r="1" fill="url(#paint2_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.23602 21C7.85725 21 7.51098 21.214 7.34159 21.5528L6.89441 22.4472C6.64743 22.9412 6.04676 23.1414 5.55278 22.8944C5.05879 22.6475 4.85856 22.0468 5.10554 21.5528L5.55272 20.6584C6.06089 19.642 7.09969 19 8.23602 19H15.7639C16.9002 19 17.939 19.642 18.4472 20.6583L18.8944 21.5528C19.1414 22.0468 18.9412 22.6474 18.4472 22.8944C17.9532 23.1414 17.3525 22.9412 17.1056 22.4472L16.6583 21.5528C16.4889 21.214 16.1427 21 15.7639 21H8.23602Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V9C19 9.55228 18.5523 10 18 10H6C5.44772 10 5 9.55228 5 9V5Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="1"
            x2="12"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="6"
            y1="14"
            x2="6"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="18"
            y1="14"
            x2="18"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="19"
            x2="12"
            y2="23.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="12"
            y1="4"
            x2="12"
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
