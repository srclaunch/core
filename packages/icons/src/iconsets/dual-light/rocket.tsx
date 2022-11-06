import { memo, ReactElement, SVGProps } from 'react';
export const Rocket = memo(
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
          d="M7 12H8.1802C8.65688 12 9.06729 12.3365 9.16078 12.8039L10 17L5.5547 19.9635C4.89015 20.4066 4 19.9302 4 19.1315V15C4 13.3431 5.34315 12 7 12Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M17 12H15.8198C15.3431 12 14.9327 12.3365 14.8392 12.8039L14 17L18.4453 19.9635C19.1099 20.4066 20 19.9302 20 19.1315V15C20 13.3431 18.6569 12 17 12Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M13.166 20H10.834C10.3603 20 9.94759 20.338 9.98729 20.81C10.0498 21.5534 10.4005 22.5925 11.8042 22.9553C11.932 22.9883 12.068 22.9883 12.1958 22.9553C13.5995 22.5925 13.9502 21.5534 14.0127 20.81C14.0524 20.338 13.6396 20 13.166 20Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M6.99995 8C7.7498 5.75067 10.1861 3.22024 11.3583 2.09474C11.7197 1.74777 12.2803 1.74777 12.6416 2.09474C13.8139 3.22024 16.2502 5.75066 16.9999 8C17.7732 10.3198 16.8307 14.4868 16.1286 16.9724C15.7824 18.198 14.6476 19 13.3741 19H10.6172C9.34782 19 8.21578 18.2032 7.8678 16.9824C7.16224 14.5072 6.21616 10.3511 6.99995 8Z"
          fill="url(#paint3_linear)"
        />
        <circle cx="12" cy="10" r="2" fill="url(#paint4_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7"
            y1="12"
            x2="7"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="17"
            y1="12"
            x2="17"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="20"
            x2="12"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="11.9971"
            y1="1.5"
            x2="11.9971"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="12"
            y1="8"
            x2="12"
            y2="12"
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
