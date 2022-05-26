import { memo, ReactElement, SVGProps } from 'react';
export const Scissors = memo(
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
          d="M17.4151 2.7907C17.8934 3.06684 18.0573 3.67843 17.7811 4.15672L9.03111 19.3122C8.75497 19.7905 8.14338 19.9543 7.66508 19.6782C7.18679 19.402 7.02292 18.7905 7.29906 18.3122L16.0491 3.15672C16.3252 2.67843 16.9368 2.51455 17.4151 2.7907Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.24997 18.8612C5.96741 19.2754 6.8848 19.0296 7.29901 18.3122C7.71323 17.5947 7.46741 16.6773 6.74997 16.2631C6.03254 15.8489 5.11515 16.0947 4.70094 16.8122C4.28672 17.5296 4.53254 18.447 5.24997 18.8612ZM4.24997 20.5933C5.924 21.5598 8.06456 20.9862 9.03106 19.3122C9.99756 17.6381 9.424 15.4976 7.74997 14.5311C6.07595 13.5646 3.93538 14.1381 2.96889 15.8122C2.00239 17.4862 2.57595 19.6268 4.24997 20.5933Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.58488 2.7907C6.10659 3.06684 5.94272 3.67843 6.21886 4.15672L14.9689 19.3122C15.245 19.7905 15.8566 19.9543 16.3349 19.6782C16.8132 19.402 16.9771 18.7905 16.7009 18.3122L7.95091 3.15672C7.67477 2.67843 7.06318 2.51455 6.58488 2.7907Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.75 18.8612C18.0325 19.2754 17.1151 19.0296 16.7009 18.3122C16.2867 17.5947 16.5325 16.6773 17.25 16.2631C17.9674 15.8489 18.8848 16.0947 19.299 16.8122C19.7132 17.5296 19.4674 18.447 18.75 18.8612ZM19.75 20.5933C18.076 21.5598 15.9354 20.9862 14.9689 19.3122C14.0024 17.6381 14.5759 15.4976 16.25 14.5311C17.924 13.5646 20.0646 14.1381 21.0311 15.8122C21.9976 17.4862 21.424 19.6268 19.75 20.5933Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12.5401"
            y1="2.65656"
            x2="12.5401"
            y2="19.8123"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="5.99997"
            y1="14.0616"
            x2="5.99997"
            y2="21.0628"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11.4599"
            y1="2.65656"
            x2="11.4599"
            y2="19.8123"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="18"
            y1="14.0616"
            x2="18"
            y2="21.0628"
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
