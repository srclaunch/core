import { memo, ReactElement, SVGProps } from 'react';
export const Alarm = memo(
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
        <circle cx="12" cy="13" r="8" fill="url(#paint0_linear)" />
        <path
          d="M7.46603 4.08494C7.21611 3.59352 6.61217 3.39399 6.14542 3.68741C4.75273 4.56294 3.57391 5.73998 2.69627 7.13134C2.40214 7.59764 2.60076 8.20189 3.0918 8.45255C3.58284 8.70322 4.17964 8.50453 4.4831 8.04424C5.15697 7.02209 6.03245 6.14794 7.05561 5.47561C7.51636 5.17285 7.71596 4.57636 7.46603 4.08494Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M16.5339 4.08494C16.7839 3.59352 17.3878 3.39399 17.8546 3.68741C19.2472 4.56294 20.4261 5.73998 21.3037 7.13134C21.5978 7.59764 21.3992 8.20189 20.9082 8.45255C20.4171 8.70322 19.8203 8.50453 19.5169 8.04424C18.843 7.02209 17.9675 6.14794 16.9444 5.47561C16.4836 5.17285 16.284 4.57636 16.5339 4.08494Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8C12.5523 8 13 8.44772 13 9V12.5858L14.7071 14.2929C15.0976 14.6834 15.0976 15.3166 14.7071 15.7071C14.3166 16.0976 13.6834 16.0976 13.2929 15.7071L11.5858 14C11.2107 13.6249 11 13.1162 11 12.5858V9C11 8.44772 11.4477 8 12 8Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="5"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="3.55057"
            x2="12"
            y2="8.5619"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="3.55057"
            x2="12"
            y2="8.5619"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="13"
            y1="8"
            x2="13"
            y2="16"
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
