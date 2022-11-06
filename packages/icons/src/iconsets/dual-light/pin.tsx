import { memo, ReactElement, SVGProps } from 'react';
export const Pin = memo(
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
          d="M12 14C12.5523 14 13 14.4477 13 15V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V15C11 14.4477 11.4477 14 12 14Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M18 15V14.6759C18 13.0042 17.1645 11.443 15.7735 10.5157L15.4453 10.2969C15.1671 10.1114 15 9.79917 15 9.46482V7.85078C15 7.62371 15.0773 7.4034 15.2191 7.22609L16.7809 5.27391C16.9227 5.0966 17 4.87629 17 4.64922V3C17 2.44772 16.5523 2 16 2H8C7.44772 2 7 2.44772 7 3V4.64922C7 4.87629 7.07728 5.0966 7.21913 5.27391L8.78087 7.22609C8.92272 7.4034 9 7.62371 9 7.85078V9.46482C9 9.79917 8.8329 10.1114 8.5547 10.2969L8.2265 10.5157C6.83551 11.443 6 13.0042 6 14.6759V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="14"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="16"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);
