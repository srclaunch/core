import { memo, ReactElement, SVGProps } from 'react';

export const Timer = memo(
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
          d="M10 2C9.44772 2 9 2.44772 9 3C9 3.55228 9.44772 4 10 4H11V5.06189C7.05369 5.55399 4 8.92038 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 8.92038 16.9463 5.55399 13 5.06189V4H14C14.5523 4 15 3.55228 15 3C15 2.44772 14.5523 2 14 2H10Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M6.77131 4.47379C6.4831 4.0038 5.86523 3.85291 5.4233 4.18254C5.03325 4.47346 4.66294 4.78994 4.3148 5.1299C3.92035 5.51508 3.97313 6.14891 4.39247 6.50683C4.81181 6.86474 5.43843 6.81021 5.84055 6.43305C6.04287 6.24329 6.25385 6.06297 6.47283 5.89268C6.90803 5.55424 7.05952 4.94377 6.77131 4.47379Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M17.2286 4.47379C17.5168 4.0038 18.1347 3.85291 18.5766 4.18254C18.9666 4.47346 19.337 4.78994 19.6851 5.1299C20.0795 5.51508 20.0268 6.14891 19.6074 6.50683C19.1881 6.86474 18.5615 6.81021 18.1593 6.43305C17.957 6.24329 17.746 6.06297 17.5271 5.89268C17.0919 5.55424 16.9404 4.94377 17.2286 4.47379Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2071 11.2071C15.5976 10.8166 15.5976 10.1834 15.2071 9.79289C14.8166 9.40237 14.1834 9.40237 13.7929 9.79289L12.518 11.0677C12.3528 11.0236 12.1792 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 12.8208 13.9764 12.6472 13.9323 12.482L15.2071 11.2071Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="11.9999"
            y1="4.0058"
            x2="11.9999"
            y2="6.74769"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="11.9999"
            y1="4.0058"
            x2="11.9999"
            y2="6.74769"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12.75"
            y1="9.5"
            x2="12.75"
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
