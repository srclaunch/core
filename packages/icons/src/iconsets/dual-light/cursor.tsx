import { memo, ReactElement, SVGProps } from 'react';
export const Cursor = memo(
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
          d="M12.6603 14.8384C13.1386 14.5623 13.7502 14.7262 14.0264 15.2045L17.0264 20.4006C17.3025 20.8789 17.1386 21.4905 16.6603 21.7666C16.182 22.0428 15.5705 21.8789 15.2943 21.4006L12.2943 16.2045C12.0182 15.7262 12.182 15.1146 12.6603 14.8384Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M5.46714 17.8244L4.19279 4.72415C3.98498 2.58785 6.38862 1.20012 8.1348 2.44823L18.8428 10.102C20.5895 11.3505 20.0536 14.0749 17.9642 14.5688L14.0361 15.4974C13.4648 15.6325 12.9457 15.9322 12.543 16.3595L9.77481 19.297C8.30232 20.8595 5.67501 19.9614 5.46714 17.8244Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.6603"
            y1="14.8384"
            x2="16.6603"
            y2="21.7666"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12.0353"
            y1="1.97607"
            x2="12.0353"
            y2="20.0857"
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
