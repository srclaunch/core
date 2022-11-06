import { memo, ReactElement, SVGProps } from 'react';
export const Hourglass = memo(
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
          d="M9.456 18.0704L7 22H17L14.544 18.0704C13.369 16.1904 10.631 16.1904 9.456 18.0704Z"
          fill="url(#paint0_linear)"
        />
        <path d="M17 7H7L9 11H15L17 7Z" fill="url(#paint1_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4V4.5778C19 6.15719 18.5325 7.70126 17.6564 9.0154L15.6667 12L17.6564 14.9846C18.5325 16.2987 19 17.8428 19 19.4222V20C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20V19.4222C5 17.8428 5.4675 16.2987 6.3436 14.9846L8.33333 12L6.3436 9.0154C5.4675 7.70126 5 6.15719 5 4.5778V4C4.44772 4 4 3.55228 4 3ZM7 20H17V19.4222C17 18.2377 16.6494 17.0796 15.9923 16.094L13.9296 13H10.0704L8.0077 16.094C7.35063 17.0796 7 18.2377 7 19.4222V20ZM7 4H17V4.5778C17 5.76234 16.6494 6.92039 15.9923 7.90599L13.9296 11H10.0704L8.0077 7.906C7.35063 6.92039 7 5.76234 7 4.5778V4Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="14"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="7"
            x2="12"
            y2="11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="2"
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
