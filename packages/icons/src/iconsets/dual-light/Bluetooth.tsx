import { memo, ReactElement, SVGProps } from 'react';
export const Bluetooth = memo(
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
          d="M12 4.83168V10.5246L16.2132 7.54018L12 4.83168ZM9.99996 9.60789V3.91584C9.99996 2.7291 11.3128 2.01233 12.3111 2.65408L17.2947 5.85783C18.4868 6.62419 18.5257 8.35307 17.3692 9.17223L13.3771 12L17.3692 14.8278C18.5257 15.647 18.4868 17.3758 17.2947 18.1422L12.3111 21.3459C11.3128 21.9877 9.99996 21.2709 9.99996 20.0842V14.3921L6.57798 16.816C6.1273 17.1353 5.50316 17.0287 5.18393 16.578C4.8647 16.1274 4.97126 15.5032 5.42194 15.184L9.91697 12L5.42194 8.81604C4.97126 8.49681 4.8647 7.87267 5.18393 7.42199C5.50316 6.97132 6.1273 6.86476 6.57798 7.18399L9.99996 9.60789ZM12 13.4755V19.1683L16.2132 16.4598L12 13.4755Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="11.6065"
            y1="2.41339"
            x2="11.6065"
            y2="21.5866"
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
