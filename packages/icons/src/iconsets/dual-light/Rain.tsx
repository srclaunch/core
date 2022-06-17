import { memo, ReactElement, SVGProps } from 'react';
export const Rain = memo(
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
          d="M22 10C22 13.866 18.866 17 15 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C7.54527 7 8.07015 7.08728 8.56143 7.24864C9.63037 4.75042 12.1108 3 15 3C18.866 3 22 6.13401 22 10Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M8.39952 16.1071L6.89954 20.1071"
          stroke="url(#paint1_linear)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12.3995 16.1071L10.8995 20.1071"
          stroke="url(#paint2_linear)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M16.3995 16.1071L14.8995 20.1071"
          stroke="url(#paint3_linear)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="8.19976"
            y1="16.0535"
            x2="7.09928"
            y2="20.1606"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12.1998"
            y1="16.0535"
            x2="11.0993"
            y2="20.1606"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="16.1998"
            y1="16.0535"
            x2="15.0993"
            y2="20.1606"
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
