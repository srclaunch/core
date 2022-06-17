import { memo, ReactElement, SVGProps } from 'react';
export const Wifi = memo(
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
        <circle cx="12" cy="18" r="2" fill="url(#paint0_linear)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 14C10.6167 14 9.36624 14.5604 8.45996 15.469C8.06993 15.86 7.43676 15.8608 7.04574 15.4708C6.65472 15.0807 6.65392 14.4476 7.04395 14.0566C8.31009 12.7872 10.0641 12 12 12C13.9359 12 15.6899 12.7872 16.9561 14.0566C17.3461 14.4476 17.3453 15.0807 16.9543 15.4708C16.5632 15.8608 15.9301 15.86 15.54 15.469C14.6338 14.5604 13.3833 14 12 14Z"
          fill="url(#paint1_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 10C9.5167 10 7.26988 11.0045 5.64046 12.6317C5.24967 13.0219 4.61651 13.0215 4.22625 12.6307C3.83599 12.2399 3.83642 11.6067 4.22721 11.2165C6.21631 9.2301 8.96548 8 12 8C15.0346 8 17.7838 9.2301 19.7729 11.2165C20.1637 11.6067 20.1641 12.2399 19.7738 12.6307C19.3836 13.0215 18.7504 13.0219 18.3596 12.6317C16.7302 11.0045 14.4834 10 12 10Z"
          fill="url(#paint2_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6C8.40947 6 5.16048 7.45434 2.80678 9.80849C2.4163 10.199 1.78313 10.1991 1.39257 9.80862C1.00201 9.41813 1.00195 8.78497 1.39244 8.39441C4.10589 5.68044 7.85767 4 12 4C16.1424 4 19.8942 5.68044 22.6077 8.39441C22.9981 8.78497 22.9981 9.41813 22.6075 9.80862C22.217 10.1991 21.5838 10.199 21.1933 9.80849C18.8396 7.45434 15.5906 6 12 6Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="16"
            x2="12"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="12"
            x2="12"
            y2="15.7628"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="12"
            y1="8"
            x2="12"
            y2="12.9241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="12"
            y1="4"
            x2="12"
            y2="10.1014"
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
