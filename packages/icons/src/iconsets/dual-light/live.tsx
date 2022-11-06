import { memo, ReactElement, SVGProps } from 'react';
export const Live = memo(
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
          d="M10 11.9004C10 13.005 10.8954 13.9004 12 13.9004C13.1046 13.9004 14 13.005 14 11.9004C14 10.7958 13.1046 9.90039 12 9.90039C10.8954 9.90039 10 10.7958 10 11.9004Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 11.9004C16 10.7564 15.617 9.70477 14.9718 8.86265C14.6359 8.42426 14.719 7.79657 15.1574 7.46067C15.5958 7.12476 16.2234 7.20785 16.5594 7.64624C17.4627 8.82522 18 10.3015 18 11.9004C18 13.5668 17.4164 15.0997 16.4434 16.3018C16.0959 16.7311 15.4662 16.7974 15.0369 16.4499C14.6077 16.1025 14.5413 15.4728 14.8888 15.0435C15.5842 14.1844 16 13.0923 16 11.9004Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 11.9004C8 10.7549 8.38397 9.70196 9.03075 8.85928C9.36702 8.42117 9.28446 7.79341 8.84635 7.45714C8.40823 7.12088 7.78048 7.20344 7.44421 7.64155C6.53871 8.82129 6 10.2993 6 11.9004C6 13.5655 6.58267 15.0973 7.55437 16.299C7.90163 16.7284 8.53128 16.7951 8.96074 16.4478C9.39019 16.1006 9.45682 15.4709 9.10956 15.0415C8.41518 14.1827 8 13.0914 8 11.9004Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 11.9004C20 9.66837 19.1888 7.62835 17.8438 6.05526C17.4849 5.63549 17.5342 5.00425 17.954 4.64535C18.3738 4.28645 19.005 4.3358 19.3639 4.75557C21.0069 6.67719 22 9.1741 22 11.9004C22 14.6895 20.9607 17.2382 19.2497 19.1767C18.8843 19.5908 18.2523 19.6302 17.8383 19.2647C17.4242 18.8993 17.3848 18.2673 17.7503 17.8532C19.1511 16.2661 20 14.1836 20 11.9004Z"
          fill="url(#paint3_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 11.9004C4 9.66855 4.81114 7.62864 6.15595 6.05559C6.51483 5.6358 6.46545 5.00457 6.04566 4.64568C5.62588 4.2868 4.99464 4.33618 4.63576 4.75597C2.99299 6.67754 2 9.17431 2 11.9004C2 14.6857 3.03649 17.2314 4.74335 19.1689C5.10842 19.5833 5.74032 19.6233 6.15474 19.2582C6.56915 18.8932 6.60915 18.2613 6.24408 17.8469C4.8466 16.2605 4 14.1806 4 11.9004Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="14"
            y1="11.9004"
            x2="10"
            y2="11.9004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="18"
            y1="11.9635"
            x2="14.6661"
            y2="11.9635"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="6"
            y1="11.9603"
            x2="9.332"
            y2="11.9603"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="22"
            y1="11.9602"
            x2="17.5"
            y2="11.9602"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6073D8" />
            <stop offset="1" stopColor="#5C5ACA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="2"
            y1="11.9568"
            x2="6.49373"
            y2="11.9568"
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
