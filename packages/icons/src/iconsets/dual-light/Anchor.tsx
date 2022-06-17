import { memo, ReactElement, SVGProps } from 'react';
export const Anchor = memo(
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
        <circle
          cx="12"
          cy="5"
          r="2"
          stroke="url(#paint0_linear)"
          stroke-width="2"
        />
        <path
          d="M13 7.82928C12.6872 7.93984 12.3506 7.99999 12 7.99999C11.6494 7.99999 11.3128 7.93984 11 7.82928V19.9381C7.38128 19.4868 4.51314 16.6187 4.06189 13H6C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11H3C2.44772 11 2 11.4477 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11H18C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13H19.9381C19.4869 16.6187 16.6187 19.4868 13 19.9381V7.82928Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="7.82928"
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
