import { memo, ReactElement, SVGProps } from 'react';
export const CloseCircle = memo(
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
        <circle cx="12" cy="12" r="10" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.29292 14.2929C7.9024 14.6834 7.9024 15.3166 8.29292 15.7071C8.68345 16.0976 9.31661 16.0976 9.70714 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0977 15.3166 16.0977 15.7071 15.7071C16.0976 15.3166 16.0976 14.6835 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0977 9.31658 16.0977 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29292C9.31658 7.9024 8.68342 7.9024 8.29289 8.29292C7.90237 8.68345 7.90237 9.31661 8.29289 9.70714L10.5858 12L8.29292 14.2929Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="8"
            x2="12"
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
