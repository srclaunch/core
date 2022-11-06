import { memo, ReactElement, SVGProps } from 'react';
export const Files = memo(
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
          d="M3 9C3 7.34315 4.34315 6 6 6H12.7574C13.553 6 14.3161 6.31607 14.8787 6.87868L16.1213 8.12132C16.6839 8.68393 17 9.44699 17 10.2426V19C17 20.6569 15.6569 22 14 22H6C4.34315 22 3 20.6569 3 19V9Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M7 5C7 3.34315 8.34315 2 10 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L20.1213 5.12132C20.6839 5.68393 21 6.44699 21 7.24264V15C21 16.6569 19.6569 18 18 18H10C8.34315 18 7 16.6569 7 15V5Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M16 5V2C16.6403 2 17.2544 2.25435 17.7071 2.70711L20.2929 5.29289C20.7456 5.74565 21 6.35971 21 7H18C16.8954 7 16 6.10457 16 5Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10"
            y1="6"
            x2="10"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="14"
            y1="2"
            x2="14"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="18.5"
            y1="2"
            x2="18.5"
            y2="7"
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
