import { memo, ReactElement, SVGProps } from 'react';
export const Brush = memo(
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
          d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V11H4V5Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.54383 15.3914C4.08033 15.1662 3 13.907 3 12.4262V12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12V12.4262C21 13.907 19.9197 15.1662 18.4562 15.3914L16.3439 15.7163C15.3055 15.8761 14.5677 16.8121 14.6549 17.8592L14.7509 19.0104C14.885 20.6197 13.6149 22 12 22V22C10.3851 22 9.11502 20.6197 9.24914 19.0104L9.34507 17.8592C9.43232 16.8121 8.69454 15.8761 7.65609 15.7163L5.54383 15.3914Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="11"
            x2="12"
            y2="22"
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
