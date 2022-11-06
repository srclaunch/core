import { memo, ReactElement, SVGProps } from 'react';
export const Fire = memo(
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
          d="M12 22C16.2526 22 20 19 20 15C20 11 17 9 16 8C14.5939 6.5939 14.1521 4.74612 14.0254 3.4746C13.9552 2.77067 13.2759 2.27145 12.6864 2.66243C11.5335 3.42702 9.90375 4.98749 9 8C8.35747 10.1418 9 12 9 12C9 12 8 11.5 7.5 10C7.3353 9.5059 7.11635 8.90329 6.89675 8.31727C6.58071 7.47387 5.44066 7.48134 5.1629 8.33811C4.61497 10.0282 4 12.3031 4 14C4 19 7.74745 22 12 22Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M11 18C13.4745 18 16.2142 16.4557 16.8623 14.0924C16.9998 13.5912 17.7035 13.3597 17.8435 13.8603C17.946 14.2264 18.0001 14.6079 18.0001 15C18.0001 17.7614 15.3138 20 12.0001 20C9.86222 20 7.98549 19.0682 6.92281 17.6654C6.60896 17.2511 7.16881 16.8749 7.62054 17.132C8.58297 17.6797 9.74658 18 11 18Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="22"
            x2="12"
            y2="2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12.0461"
            y1="12.1233"
            x2="12.0461"
            y2="20"
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
