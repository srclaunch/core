import { memo, ReactElement, SVGProps } from 'react';
export const ChevronDoubleLeft = memo(
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
          d="M12.2071 19.2071C12.5976 18.8166 12.5976 18.1834 12.2071 17.7929L6.41422 12L12.2071 6.20711C12.5976 5.81658 12.5976 5.18342 12.2071 4.79289C11.8166 4.40237 11.1834 4.40237 10.7929 4.79289L5 10.5858C4.21895 11.3668 4.21895 12.6332 5 13.4142L10.7929 19.2071C11.1834 19.5976 11.8166 19.5976 12.2071 19.2071Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.4571 19.2071C18.8476 18.8166 18.8476 18.1834 18.4571 17.7929L12.6642 12L18.4571 6.20711C18.8476 5.81658 18.8476 5.18342 18.4571 4.79289C18.0666 4.40237 17.4334 4.40237 17.0429 4.79289L11.25 10.5858C10.469 11.3668 10.469 12.6332 11.25 13.4142L17.0429 19.2071C17.4334 19.5976 18.0666 19.5976 18.4571 19.2071Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.5"
            y1="12"
            x2="4.41422"
            y2="12"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18.75"
            y1="12"
            x2="10.6642"
            y2="12"
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
