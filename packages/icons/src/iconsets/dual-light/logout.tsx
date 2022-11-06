import { memo, ReactElement, SVGProps } from 'react';
export const Logout = memo(
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
          d="M12 2C13.6569 2 15 3.34315 15 5V19C15 20.6569 13.6569 22 12 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M17.7071 7.79289C17.3166 7.40237 16.6834 7.40237 16.2929 7.79289C15.9024 8.18342 15.9024 8.81658 16.2929 9.20711L18.0858 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H18.0858L16.2929 14.7929C15.9024 15.1834 15.9024 15.8166 16.2929 16.2071C16.6834 16.5976 17.3166 16.5976 17.7071 16.2071L20.5 13.4142C21.2811 12.6332 21.281 11.3668 20.5 10.5858L17.7071 7.79289Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="9"
            y1="2"
            x2="9"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="14.5429"
            y1="7.5"
            x2="14.5429"
            y2="16.5"
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
