import { memo, ReactElement, SVGProps } from 'react';
export const Receipt = memo(
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
          d="M8.6 21.55L10 20.5L11.4 21.55C11.7556 21.8167 12.2444 21.8167 12.6 21.55L14 20.5L15.4 21.55C15.7556 21.8167 16.2444 21.8167 16.6 21.55L18 20.5L19.3598 21.6332C20.0111 22.1759 21 21.7128 21 20.8649V3.13503C21 2.28719 20.0111 1.82404 19.3598 2.36681L18 3.49999L16.6 2.44999C16.2444 2.18332 15.7556 2.18332 15.4 2.44999L14 3.49999L12.6 2.44999C12.2444 2.18332 11.7556 2.18332 11.4 2.44999L10 3.49999L8.6 2.44999C8.24444 2.18332 7.75556 2.18332 7.4 2.44999L6 3.49999L4.64018 2.36681C3.98886 1.82403 3 2.28719 3 3.13503V20.8649C3 21.7128 3.98886 22.1759 4.64018 21.6332L6 20.5L7.4 21.55C7.75556 21.8167 8.24444 21.8167 8.6 21.55Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 10C7 9.44772 7.44772 9 8 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H8C7.44772 11 7 10.5523 7 10Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 14C7 13.4477 7.44772 13 8 13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H8C7.44772 15 7 14.5523 7 14Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2.13312"
            x2="12"
            y2="21.8669"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="9"
            x2="12"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="10"
            y1="13"
            x2="10"
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
