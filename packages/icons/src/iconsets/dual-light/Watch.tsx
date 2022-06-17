import { memo, ReactElement, SVGProps } from 'react';
export const Watch = memo(
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
          d="M7.99184 4.37141C8.28824 2.9882 9.51063 2 10.9252 2H13.0748C14.4894 2 15.7118 2.9882 16.0082 4.37141L17 9H7L7.99184 4.37141Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 15H17L16.0082 19.6286C15.7118 21.0118 14.4894 22 13.0748 22H10.9253C9.51068 22 8.2883 21.0118 7.99189 19.6286L7 15Z"
          fill="url(#paint1_linear)"
        />
        <rect
          x="17"
          y="10"
          width="3"
          height="4"
          rx="1.5"
          fill="url(#paint2_linear)"
        />
        <circle cx="12" cy="12" r="7" fill="url(#paint3_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8C12.5523 8 13 8.44772 13 9V11.5858L14.2071 12.7929C14.5976 13.1834 14.5976 13.8166 14.2071 14.2071C13.8166 14.5976 13.1834 14.5976 12.7929 14.2071L11.4393 12.8536C11.158 12.5722 11 12.1907 11 11.7929V9C11 8.44772 11.4477 8 12 8Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="15"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="18.5"
            y1="10"
            x2="18.5"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="12.75"
            y1="8"
            x2="12.75"
            y2="14.5"
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
