import { memo, ReactElement, SVGProps } from 'react';
export const EventScheduled = memo(
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
        <rect
          x="2"
          y="4"
          width="20"
          height="18"
          rx="3"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 2C7.55228 2 8 2.44772 8 3V7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7V3C6 2.44772 6.44772 2 7 2Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 2C17.5523 2 18 2.44772 18 3V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7V3C16 2.44772 16.4477 2 17 2Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071L7.79289 14.2071C7.40237 13.8166 7.40237 13.1834 7.79289 12.7929C8.18342 12.4024 8.81658 12.4024 9.20711 12.7929L11 14.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="7"
            y1="2"
            x2="7"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="17"
            y1="2"
            x2="17"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12.25"
            y1="10"
            x2="12.25"
            y2="17"
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
