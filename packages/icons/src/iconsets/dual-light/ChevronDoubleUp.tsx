import { memo, ReactElement, SVGProps } from 'react';
export const ChevronDoubleUp = memo(
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
          d="M4.79289 12.4571C5.18342 12.8476 5.81658 12.8476 6.20711 12.4571L12 6.66422L17.7929 12.4571C18.1834 12.8476 18.8166 12.8476 19.2071 12.4571C19.5976 12.0666 19.5976 11.4334 19.2071 11.0429L13.4142 5.25C12.6332 4.46895 11.3668 4.46895 10.5858 5.25L4.79289 11.0429C4.40237 11.4334 4.40237 12.0666 4.79289 12.4571Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.79289 18.7071C5.18342 19.0976 5.81658 19.0976 6.20711 18.7071L12 12.9142L17.7929 18.7071C18.1834 19.0976 18.8166 19.0976 19.2071 18.7071C19.5976 18.3166 19.5976 17.6834 19.2071 17.2929L13.4142 11.5C12.6332 10.719 11.3668 10.719 10.5858 11.5L4.79289 17.2929C4.40237 17.6834 4.40237 18.3166 4.79289 18.7071Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="12.75"
            x2="12"
            y2="4.66422"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="19"
            x2="12"
            y2="10.9142"
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
