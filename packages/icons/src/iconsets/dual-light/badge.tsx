import { memo, ReactElement, SVGProps } from 'react';
export const Badge = memo(
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
          d="M7 13H17V21.156C17 21.8258 16.3543 22.3063 15.7127 22.1138L12 21L8.28735 22.1138C7.64574 22.3063 7 21.8258 7 21.156L7 13Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M10.0541 2.65824C11.1754 1.7027 12.8246 1.7027 13.9459 2.65824L14.0162 2.71817C14.4967 3.12764 15.0941 3.3751 15.7234 3.42532L15.8155 3.43267C17.284 3.54986 18.4501 4.71599 18.5673 6.18452L18.5747 6.27662C18.6249 6.90592 18.8724 7.50334 19.2818 7.98383L19.3418 8.05415C20.2973 9.17542 20.2973 10.8246 19.3418 11.9459L19.2818 12.0162C18.8724 12.4967 18.6249 13.0941 18.5747 13.7234L18.5673 13.8155C18.4501 15.284 17.284 16.4501 15.8155 16.5673L15.7234 16.5747C15.0941 16.6249 14.4967 16.8724 14.0162 17.2818L13.9459 17.3418C12.8246 18.2973 11.1754 18.2973 10.0541 17.3418L9.98383 17.2818C9.50334 16.8724 8.90592 16.6249 8.27662 16.5747L8.18452 16.5673C6.71599 16.4501 5.54986 15.284 5.43267 13.8155L5.42532 13.7234C5.3751 13.0941 5.12764 12.4967 4.71817 12.0162L4.65824 11.9459C3.7027 10.8246 3.7027 9.17542 4.65824 8.05415L4.71817 7.98383C5.12764 7.50334 5.3751 6.90592 5.42532 6.27662L5.43267 6.18452C5.54986 4.71599 6.71599 3.54986 8.18452 3.43267L8.27662 3.42532C8.90592 3.3751 9.50334 3.12764 9.98383 2.71817L10.0541 2.65824Z"
          fill="url(#paint1_linear)"
        />
        <circle cx="12" cy="10" r="3" fill="url(#paint2_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="13"
            x2="12"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="1"
            x2="12"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="7"
            x2="12"
            y2="13"
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
