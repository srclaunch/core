import { memo, ReactElement, SVGProps } from 'react';
export const Location = memo(
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
          d="M18.2725 15.0565C19.3752 13.681 20.0348 11.9349 20.0348 10.0348C20.0348 5.5973 16.4375 2 12 2C7.5625 2 3.96521 5.5973 3.96521 10.0348C3.96521 11.9349 4.62478 13.681 5.72747 15.0565L5.73397 15.0646C5.73397 15.0646 8.52282 18.7985 10.6792 21.4386C11.3689 22.2831 12.6313 22.2834 13.3215 21.4393C15.4847 18.7933 18.2772 15.0565 18.2772 15.0565H18.2725Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="7"
            x2="12"
            y2="13"
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
