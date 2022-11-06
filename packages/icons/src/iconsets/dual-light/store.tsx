import { memo, ReactElement, SVGProps } from 'react';
export const Store = memo(
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
          d="M16.357 11.2572L16.9994 11.0002L17.0005 11.0002L17.7016 11.3508C18.5394 11.7697 19.4995 11.8751 20.4084 11.6479C20.6211 11.5947 20.8191 11.5146 21 11.4121V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V11.4121C3.18091 11.5146 3.37895 11.5947 3.59166 11.6479C4.50046 11.8751 5.46056 11.7697 6.29844 11.3508L6.99955 11.0002L7.00058 11.0002L7.64305 11.2572C8.83511 11.734 10.1649 11.734 11.357 11.2572L12 11L12.6431 11.2572C13.8351 11.734 15.1649 11.734 16.357 11.2572Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M9 18C9 16.3431 10.3431 15 12 15V15C13.6569 15 15 16.3431 15 18V22H9V18Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M16.9994 11.0002L16.357 11.2572C15.1649 11.734 13.8351 11.734 12.6431 11.2572L12 11L11.357 11.2572C10.1649 11.734 8.83511 11.734 7.64305 11.2572L7.00058 11.0002L6.99955 11.0002L6.29844 11.3508C5.46056 11.7697 4.50046 11.8751 3.59166 11.6479C2.21624 11.3041 1.45439 9.83157 1.96825 8.51023L3.75619 3.91266C4.20463 2.75954 5.31497 2 6.55221 2H8.4799C8.49258 1.99976 8.5053 1.99976 8.51806 2H15.4819C15.4946 1.99976 15.5073 1.99976 15.52 2H17.4478C18.685 2 19.7954 2.75955 20.2438 3.91266L22.0318 8.51023C22.5456 9.83158 21.7838 11.3041 20.4084 11.6479C19.4995 11.8751 18.5394 11.7697 17.7016 11.3508L17.0005 11.0002L16.9994 11.0002Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="11"
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
            x1="12"
            y1="1.99982"
            x2="12"
            y2="11.7651"
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
