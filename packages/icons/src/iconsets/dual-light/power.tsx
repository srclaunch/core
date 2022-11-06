import { memo, ReactElement, SVGProps } from 'react';
export const Power = memo(
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
          d="M15.6324 4.87109C15.8829 4.37949 16.4883 4.17955 16.9491 4.48294C18.3473 5.40344 19.467 6.69992 20.1733 8.23209C21.0196 10.068 21.2233 12.1353 20.7513 14.101C20.2794 16.0667 19.1594 17.8163 17.5719 19.0679C15.9843 20.3194 14.0216 21 12 21C9.97845 21 8.01575 20.3194 6.42817 19.0679C4.8406 17.8164 3.72061 16.0668 3.24868 14.1011C2.77675 12.1353 2.98036 10.068 3.82671 8.23211C4.53305 6.69993 5.65273 5.40346 7.05089 4.48295C7.51172 4.17956 8.11713 4.3795 8.36761 4.8711C8.61809 5.36269 8.41731 5.95877 7.96632 6.27661C6.96389 6.98309 6.1595 7.94427 5.64118 9.06859C4.98273 10.4969 4.82431 12.1053 5.19148 13.6346C5.55864 15.1639 6.42999 16.5251 7.66512 17.4988C8.90025 18.4725 10.4272 19.002 12 19.002C13.5728 19.002 15.0998 18.4725 16.3349 17.4988C17.57 16.5251 18.4414 15.1639 18.8085 13.6346C19.1757 12.1053 19.0173 10.4969 18.3588 9.06857C17.8405 7.94426 17.0361 6.98308 16.0337 6.2766C15.5827 5.95876 15.3819 5.36268 15.6324 4.87109Z"
          fill="url(#paint0_linear)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C12.5523 2 13 2.44772 13 3V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8V3C11 2.44772 11.4477 2 12 2Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="12"
            y1="4.33936"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D1DAEE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="12"
            y1="2"
            x2="12"
            y2="9"
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
