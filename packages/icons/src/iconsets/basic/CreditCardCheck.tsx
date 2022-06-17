import { memo, ReactElement, SVGProps } from 'react';
export const CreditCardCheck = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-credit-card-check"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="68" y="210.099" width="264" height="40" />
        <polygon points="343.191,420.538 264.789,345.908 237.211,374.881 345.438,477.901 511.88,292.585 482.12,265.856 " />
        <path d="M452,34.099H60c-33.084,0-60,26.916-60,60v256c0,33.084,26.916,60,60,60h137v-40H60c-11.028,0-20-8.972-20-20v-170h432 v46.122h40V94.099C512,61.015,485.084,34.099,452,34.099z M472,120.099H40v-26c0-11.028,8.972-20,20-20h392 c11.028,0,20,8.972,20,20V120.099z" />
      </svg>
    );
  },
);
