import { memo, ReactElement, SVGProps } from 'react';
export const Medal = memo(
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
          d="M16.2969 10.5547L20.9635 3.5547C21.4066 2.89015 20.9302 2 20.1315 2H16.0704C15.4017 2 14.7772 2.3342 14.4063 2.8906L10.0365 9.4453C9.59343 10.1099 10.0698 11 10.8685 11H15.4648C15.7992 11 16.1114 10.8329 16.2969 10.5547Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M7.70313 10.5547L3.03647 3.5547C2.59343 2.89015 3.06982 2 3.86852 2H7.92963C8.59834 2 9.2228 2.3342 9.59373 2.8906L13.9635 9.4453C14.4066 10.1099 13.9302 11 13.1315 11H8.53518C8.20083 11 7.8886 10.8329 7.70313 10.5547Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="15.5"
            y1="2"
            x2="15.5"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="8.5"
            y1="2"
            x2="8.5"
            y2="11"
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
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="12"
            x2="12"
            y2="18"
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
