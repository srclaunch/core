import { memo, ReactElement, SVGProps } from 'react';

export const Upload = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
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
        d="M17.2071 9.2905C17.5976 9.68103 17.5976 10.3142 17.2071 10.7047C16.8166 11.0952 16.1834 11.0952 15.7929 10.7047L13.0019 7.91377V15C13.0019 15.5523 12.5542 16 12.0019 16C11.4496 16 11.0019 15.5523 11.0019 15V7.91368L8.20894 10.7067C7.81841 11.0972 7.18525 11.0972 6.79472 10.7067C6.4042 10.3161 6.4042 9.68298 6.79472 9.29245L11.2948 4.79241C11.4823 4.60487 11.7367 4.49951 12.0019 4.49951C12.2671 4.49951 12.5214 4.60487 12.709 4.79241L17.2071 9.2905Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14C4.55228 14 5 14.4477 5 15V17C5 17.5523 5.44772 18 6 18H18C18.5523 18 19 17.5523 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 18.6569 19.6569 20 18 20H6C4.34315 20 3 18.6569 3 17V15C3 14.4477 3.44772 14 4 14Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12.0009"
          y1="4.49951"
          x2="12.0009"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#D1DAEE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="12"
          y1="14"
          x2="12"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6073D8" />
          <stop offset="1" stopColor="#5C5ACA" />
        </linearGradient>
      </defs>
    </svg>
  );
});
