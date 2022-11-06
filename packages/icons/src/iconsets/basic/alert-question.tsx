import { memo, ReactElement, SVGProps } from 'react';
export const AlertQuestion = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-alert-question"
        enableBackground="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m505.853 413.354-210.961-360h-.015c-8.027-13.785-22.925-22.354-38.877-22.354s-30.85 8.569-38.892 22.354l-210.947 359.97c-17.34 29.554 3.916 67.676 38.862 67.676h421.938c34.818 0 56.25-37.971 38.892-67.646zm-234.853-22.354h-30v-30h30zm7.515-96.035c-4.629 2.681-7.515 7.676-7.515 13.008v23.027h-30v-23.027c0-16.011 8.613-30.938 22.485-38.965 4.644-2.681 7.515-7.661 7.515-13.008 0-8.276-6.724-15-15-15s-15 6.724-15 15h-30c0-24.814 20.186-45 45-45s45 20.186 45 45c0 16.011-8.613 30.952-22.485 38.965z" />
      </svg>
    );
  },
);
