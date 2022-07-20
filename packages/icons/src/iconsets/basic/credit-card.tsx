import { memo, ReactElement, SVGProps } from 'react';
export const CreditCard = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-credit-card"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <g>
            <path d="M452,76H60c-33.084,0-60,26.916-60,60c0,15.945,0,232.847,0,240c0,33.084,26.916,60,60,60h392c33.084,0,60-26.916,60-60 c0-11.2,0-230.936,0-240C512,102.916,485.084,76,452,76z M472,376c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V271h432 V376z M472,231H40v-50h432V231z M472,141H40v-5c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20V141z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M230,326H90c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h140c11.046,0,20-8.954,20-20 C250,334.954,241.046,326,230,326z" />
          </g>
        </g>
      </svg>
    );
  },
);
