import { memo, ReactElement, SVGProps } from 'react';
export const Percent = memo(
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
          d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19ZM17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.6001 3.2C19.0419 3.53137 19.1314 4.15817 18.8001 4.6L6.80006 20.6C6.46869 21.0418 5.84189 21.1314 5.40006 20.8C4.95823 20.4686 4.86869 19.8418 5.20006 19.4L17.2001 3.4C17.5314 2.95817 18.1582 2.86863 18.6001 3.2Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="7"
            y1="3"
            x2="7"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="17"
            y1="13"
            x2="17"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12.0001"
            y1="2.99994"
            x2="12.0001"
            y2="21.0001"
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
