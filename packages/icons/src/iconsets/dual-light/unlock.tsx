import { memo, ReactElement, SVGProps } from 'react';
export const Unlock = memo(
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
          d="M14.9055 6.24926C14.5724 4.95512 13.3964 4 11.9999 4C10.3431 4 8.99992 5.34315 8.99992 7V8H17C18.6569 8 20 9.34315 20 11V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V11C4 9.34317 5.3431 8.00004 6.99992 8V7C6.99992 4.23858 9.2385 2 11.9999 2C14.3311 2 16.2873 3.59442 16.8423 5.75074C16.98 6.28559 16.658 6.83078 16.1232 6.96844C15.5883 7.1061 15.0431 6.78411 14.9055 6.24926Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
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
