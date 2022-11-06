import { memo, ReactElement, SVGProps } from 'react';

export const Trash = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
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
        d="M4 7H20V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10C9.55228 10 10 10.4477 10 11V18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18V11C8 10.4477 8.44772 10 9 10Z"
        fill="url(#paint1_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10C15.5523 10 16 10.4477 16 11V18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18V11C14 10.4477 14.4477 10 15 10Z"
        fill="url(#paint2_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7ZM10 4H14C14.5523 4 15 4.44772 15 5H9C9 4.44772 9.44772 4 10 4Z"
        fill="url(#paint3_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12"
          y1="7"
          x2="12"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="9"
          y1="10"
          x2="9"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="15"
          y1="10"
          x2="15"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="12"
          y1="2"
          x2="12"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
