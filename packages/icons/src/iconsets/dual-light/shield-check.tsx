import { memo, ReactElement, SVGProps } from 'react';
export const ShieldCheck = memo(
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
          d="M3 6.66228C3 5.37099 3.82629 4.22457 5.05132 3.81623L11.0513 1.81623C11.6671 1.61096 12.3329 1.61096 12.9487 1.81623L18.9487 3.81623C20.1737 4.22457 21 5.37099 21 6.66228V12C21 17.502 15.4398 20.8417 13.0601 22.0192C12.3875 22.3519 11.6125 22.3519 10.9399 22.0192C8.56019 20.8417 3 17.502 3 12V6.66228Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.2728 14.1414C11.5698 14.8444 10.4302 14.8444 9.72721 14.1414L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="1.5"
            x2="12"
            y2="22.5"
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
            y2="14.6686"
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
