import { memo, ReactElement, SVGProps } from 'react';
export const Key = memo(
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
          d="M22 12C22 15.3137 19.3137 18 16 18C13.7792 18 11.8401 16.7934 10.8027 15H5.41427C5.14906 15 4.8947 14.8946 4.70717 14.7071L2.70696 12.7069C2.31649 12.3165 2.31642 11.6834 2.7068 11.2929L4.70574 9.29305C4.89329 9.10542 5.14771 9 5.413 9H10.8027C11.8401 7.2066 13.7792 6 16 6C19.3137 6 22 8.68629 22 12Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.207"
            y1="6"
            x2="12.207"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="16"
            y1="10"
            x2="16"
            y2="14"
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
