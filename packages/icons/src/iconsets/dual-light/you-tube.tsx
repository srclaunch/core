import { memo, ReactElement, SVGProps } from 'react';
export const YouTube = memo(
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
          d="M2.62305 8.2617C2.84605 6.92367 3.93069 5.89659 5.27887 5.74679L5.80914 5.68787C9.92372 5.2307 14.0763 5.2307 18.1909 5.68787L18.7211 5.74679C20.0693 5.89659 21.1539 6.92367 21.3769 8.2617V8.2617C21.7895 10.7368 21.7895 13.2632 21.3769 15.7383V15.7383C21.1539 17.0763 20.0693 18.1034 18.7211 18.2532L18.1909 18.3121C14.0763 18.7693 9.92372 18.7693 5.80914 18.3121L5.27887 18.2532C3.93069 18.1034 2.84605 17.0763 2.62305 15.7383V15.7383C2.21053 13.2632 2.21053 10.7368 2.62305 8.2617V8.2617Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M14.7519 11.1679C15.3457 11.5638 15.3457 12.4362 14.7519 12.8321L11.5547 14.9635C10.8901 15.4066 10 14.9302 10 14.1315V9.86852C10 9.06982 10.8901 8.59343 11.5547 9.03647L14.7519 11.1679Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
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
            id="paint1_linear"
            x1="13"
            y1="8"
            x2="13"
            y2="16"
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
