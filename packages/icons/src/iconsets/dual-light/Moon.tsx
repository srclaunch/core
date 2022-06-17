import { memo, ReactElement, SVGProps } from 'react';
export const Moon = memo(
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
          d="M20.2691 15.3752C20.6118 14.5798 19.866 13.8166 19 13.8166V13.8166C14.0294 13.8166 10 9.78715 10 4.81658V4.81658C10 3.95053 9.23674 3.20475 8.4414 3.54749C5.24067 4.92676 3 8.11 3 11.8166C3 16.7871 7.02944 20.8166 12 20.8166C15.7066 20.8166 18.8898 18.5759 20.2691 15.3752Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.6771"
            y1="3.46231"
            x2="11.6771"
            y2="20.8166"
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
