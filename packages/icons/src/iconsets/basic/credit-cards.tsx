import { memo, ReactElement, SVGProps } from 'react';
export const CreditCards = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-credit-cards"
        viewBox="0 0 512 512.00025"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m492 228h-26.636719l21.324219-21.324219c7.808594-7.804687 7.808594-20.472656 0-28.285156l-172.53125-172.53125c-7.8125-7.8125-20.476562-7.8125-28.285156 0l-280.015625 280.011719c-7.804688 7.808594-7.808594 20.476562 0 28.285156l70.144531 70.144531v107.699219c0 11.046875 8.953125 20 20 20h396c11.042969 0 20-8.953125 20-20v-244c0-11.046875-8.957031-20-20-20zm-20 76h-356v-36h356zm-63.203125-76h-181.019531l125.976562-125.976562 90.507813 90.511718zm-108.785156-179.714844 25.457031 25.457032-154.261719 154.257812h-50.910156zm-224.011719 224.011719v50.914063l-2.261719 2.257812-25.457031-25.453125zm40 199.703125v-128h356v128zm0 0" />
        <path d="m441 412c0 13.808594-11.195312 25-25 25-13.808594 0-25-11.191406-25-25s11.191406-25 25-25c13.804688 0 25 11.191406 25 25zm0 0" />
      </svg>
    );
  },
);
