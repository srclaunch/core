import { memo, ReactElement, SVGProps } from 'react';
export const ThumbsDown = memo(
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
          d="M2 10C2 11.6569 3.34315 13 5 13H7V3H5C3.34315 3 2 4.34315 2 6V10Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M22.3788 12.5124C22.6944 13.7744 21.7402 14.9971 20.4393 14.9976L14.5 15L15.049 18.2938C15.3145 19.8871 14.469 21.4582 12.9929 22.1142V22.1142C12.0557 22.5308 11 21.8447 11 20.8191V19.0523C11 18.3711 10.7682 17.7102 10.3426 17.1783L7 13V3H17.6578C19.0344 3 20.2343 3.93679 20.5682 5.2722L22.3788 12.5124Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4.5"
            y1="13"
            x2="4.5"
            y2="3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="15"
            y1="23"
            x2="15"
            y2="3"
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
