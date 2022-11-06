import { memo, ReactElement, SVGProps } from 'react';
export const Dollar = memo(
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
          d="M12 1C12.5523 1 13 1.44772 13 2V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V2C11 1.44772 11.4477 1 12 1Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 19C12.5523 19 13 19.4477 13 20V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20C11 19.4477 11.4477 19 12 19Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 7C5 4.79086 6.79086 3 9 3H15C17.2091 3 19 4.79086 19 7V8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8V7C17 5.89543 16.1046 5 15 5H9C7.89543 5 7 5.89543 7 7V7.11696C7 8.40825 7.82629 9.55467 9.05132 9.96301L15.5811 12.1396C17.6228 12.8202 19 14.7309 19 16.883V17C19 19.2091 17.2091 21 15 21H9C6.79086 21 5 19.2091 5 17V16C5 15.4477 5.44772 15 6 15C6.55228 15 7 15.4477 7 16V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V16.883C17 15.5917 16.1737 14.4453 14.9487 14.037L8.41886 11.8604C6.37715 11.1798 5 9.26912 5 7.11696V7Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="1"
            x2="12"
            y2="5"
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
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
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
