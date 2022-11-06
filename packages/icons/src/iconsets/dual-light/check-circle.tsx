import { memo, ReactElement, SVGProps } from 'react';
export const CheckCircle = memo(
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
        <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
        <path
          d="M19.3608 5.23092C19.8156 5.72529 20.2213 6.26561 20.5701 6.84411L12.4142 15C11.6332 15.781 10.3668 15.781 9.58579 15L6.79289 12.2071C6.40237 11.8166 6.40237 11.1834 6.79289 10.7929C7.18342 10.4024 7.81658 10.4024 8.20711 10.7929L11 13.5858L19.2929 5.29289C19.3148 5.27101 19.3374 5.25035 19.3608 5.23092Z"
          fill="url(#paint1_linear)"
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
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="13.5351"
            y1="5.23092"
            x2="13.5351"
            y2="15.5858"
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
