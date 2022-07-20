import { memo, ReactElement, SVGProps } from 'react';
export const CheckAll = memo(
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
          d="M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L9.12132 16.2929C7.94975 17.4645 6.05025 17.4645 4.87868 16.2929L2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929C2.68342 11.9024 3.31658 11.9024 3.70711 12.2929L6.29289 14.8787C6.68342 15.2692 7.31658 15.2692 7.70711 14.8787L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.707 7.24291C22.0976 7.63343 22.0976 8.26659 21.707 8.65712L14.0713 16.2929C12.8997 17.4645 11.0002 17.4645 9.82863 16.2929L7.24284 13.7071C6.85232 13.3166 6.85232 12.6834 7.24284 12.2929C7.63337 11.9024 8.26653 11.9024 8.65706 12.2929L11.2428 14.8787C11.6334 15.2692 12.2665 15.2692 12.6571 14.8787L20.2928 7.24291C20.6834 6.85238 21.3165 6.85238 21.707 7.24291Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="9.5"
            y1="7"
            x2="9.5"
            y2="17.1716"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="14.4749"
            y1="6.95001"
            x2="14.4749"
            y2="17.1716"
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
