import { memo, ReactElement, SVGProps } from 'react';

export const Note = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
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
        d="M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H6Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M15.6066 4.12132L14.2573 5.47055L18.5 9.71319L19.8492 8.36397C21.0208 7.19239 21.0208 5.2929 19.8492 4.12133C18.6776 2.94975 16.7781 2.94975 15.6066 4.12132Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M8.44125 16.6607L11.7411 16.1893C11.9553 16.1587 12.1538 16.0594 12.3068 15.9064L18.5 9.71322L14.2574 5.47058L8.06413 11.6638C7.91113 11.8168 7.81188 12.0153 7.78128 12.2295L7.30988 15.5293C7.2156 16.1893 7.78128 16.755 8.44125 16.6607Z"
        fill="url(#paint2_linear)"
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
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="17.4926"
          y1="3.24265"
          x2="17.4926"
          y2="9.71319"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="12.8998"
          y1="5.47058"
          x2="12.8998"
          y2="16.671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1DAEE" />
        </linearGradient>
      </defs>
    </svg>
  );
});
