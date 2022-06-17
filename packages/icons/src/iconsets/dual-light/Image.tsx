import { memo, ReactElement, SVGProps } from 'react';
export const Image = memo(
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
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <circle cx="17" cy="7" r="2" fill="url(#paint1_linear)" />
        <path
          d="M2 14.5V19C2 20.6569 3.34315 22 5 22H19C19.8479 22 20.6136 21.6483 21.1592 21.0828L10.569 9.52987C9.34177 8.19102 7.21566 8.24121 6.05292 9.63649L2 14.5Z"
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
            x1="17"
            y1="5"
            x2="17"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11.5796"
            y1="8.55704"
            x2="11.5796"
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
