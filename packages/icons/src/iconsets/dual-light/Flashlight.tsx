import { memo, ReactElement, SVGProps } from 'react';
export const Flashlight = memo(
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
          d="M7 12L5.3359 10.8906C4.5013 10.3342 4 9.39751 4 8.39445V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V8.39445C20 9.39751 19.4987 10.3342 18.6641 10.8906L17 12V19C17 20.6569 15.6569 22 14 22H10C8.34315 22 7 20.6569 7 19V12Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 13C12.5523 13 13 13.4477 13 14V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V14C11 13.4477 11.4477 13 12 13Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C12.5523 1 13 1.44772 13 2V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V2C11 1.44772 11.4477 1 12 1Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.05276 2.10555C7.54674 1.85856 8.14741 2.05878 8.3944 2.55276L8.8944 3.55276C9.14139 4.04674 8.94117 4.64741 8.44719 4.8944C7.95321 5.14139 7.35254 4.94117 7.10555 4.44719L6.60555 3.44719C6.35856 2.95321 6.55878 2.35254 7.05276 2.10555Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9472 2.10555C17.4412 2.35254 17.6414 2.95321 17.3944 3.44719L16.8944 4.44719C16.6474 4.94117 16.0467 5.14139 15.5528 4.8944C15.0588 4.64741 14.8586 4.04674 15.1055 3.55276L15.6055 2.55276C15.8525 2.05878 16.4532 1.85856 16.9472 2.10555Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="6"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="13"
            x2="12"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="1"
            x2="12"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="7.74997"
            y1="1.99976"
            x2="7.74997"
            y2="5.00019"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="16.25"
            y1="1.99976"
            x2="16.25"
            y2="5.00019"
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
