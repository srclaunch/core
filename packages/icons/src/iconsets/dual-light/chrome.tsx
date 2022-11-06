import { memo, ReactElement, SVGProps } from 'react';
export const Chrome = memo(
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
          d="M12.0828 7L20.6601 7C17.8986 2.21709 11.7828 0.578349 6.99984 3.33977C6.09465 3.86238 5.30208 4.50513 4.63064 5.23626L7.40155 10.0356C7.81141 9.07421 8.525 8.23274 9.49979 7.66994C10.3144 7.19965 11.2062 6.98461 12.0828 7Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M9.82816 21.7614C7.19018 21.1738 4.79742 19.5251 3.33958 17C1.48889 13.7945 1.61459 9.99029 3.3386 6.99839L7.66263 14.4878L7.66967 14.5001C8.70149 16.2872 10.67 17.1964 12.5971 16.9656L9.82816 21.7614Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M11.9988 22.0017C13.6987 22.0034 15.4218 21.5713 16.9998 20.6603C21.1366 18.2719 22.9213 13.3743 21.5415 8.99999L16.0004 9C16.1186 9.15808 16.2288 9.32486 16.3299 9.50007C17.2723 11.1324 17.1898 13.0752 16.2819 14.5833L11.9988 22.0017Z"
          fill="url(#paint2_linear)"
        />
        <circle cx="12" cy="12" r="3" fill="url(#paint3_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.9998"
            y1="1.99835"
            x2="11.9998"
            y2="22.0017"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="11.9998"
            y1="1.99835"
            x2="11.9998"
            y2="22.0017"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11.9998"
            y1="1.99835"
            x2="11.9998"
            y2="22.0017"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="9"
            x2="12"
            y2="15"
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
