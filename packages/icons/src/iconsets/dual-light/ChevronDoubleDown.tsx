import { memo, ReactElement, SVGProps } from 'react';
export const ChevronDoubleDown = memo(
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
          d="M4.79289 11.7929C5.18342 11.4024 5.81658 11.4024 6.20711 11.7929L12 17.5858L17.7929 11.7929C18.1834 11.4024 18.8166 11.4024 19.2071 11.7929C19.5976 12.1834 19.5976 12.8166 19.2071 13.2071L13.4142 19C12.6332 19.781 11.3668 19.781 10.5858 19L4.79289 13.2071C4.40237 12.8166 4.40237 12.1834 4.79289 11.7929Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.79289 5.54289C5.18342 5.15237 5.81658 5.15237 6.20711 5.54289L12 11.3358L17.7929 5.54289C18.1834 5.15237 18.8166 5.15237 19.2071 5.54289C19.5976 5.93341 19.5976 6.56658 19.2071 6.9571L13.4142 12.75C12.6332 13.531 11.3668 13.531 10.5858 12.75L4.79289 6.95711C4.40237 6.56658 4.40237 5.93342 4.79289 5.54289Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="11.5"
            x2="12"
            y2="19.5858"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="5.25"
            x2="12"
            y2="13.3358"
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
