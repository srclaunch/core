import { memo, ReactElement, SVGProps } from 'react';
export const ChevronUp = memo(
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
          d="M4.79289 15.4571C5.18342 15.8476 5.81658 15.8476 6.20711 15.4571L12 9.66422L17.7929 15.4571C18.1834 15.8476 18.8166 15.8476 19.2071 15.4571C19.5976 15.0666 19.5976 14.4334 19.2071 14.0429L13.4142 8.25C12.6332 7.46895 11.3668 7.46895 10.5858 8.25L4.79289 14.0429C4.40237 14.4334 4.40237 15.0666 4.79289 15.4571Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="15.75"
            x2="12"
            y2="7.66422"
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
