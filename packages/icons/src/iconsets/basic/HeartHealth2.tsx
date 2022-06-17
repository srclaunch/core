import { memo, ReactElement, SVGProps } from 'react';
export const HeartHealth2 = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-heart-health-2"
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m163.3 29.537c-18.258-9.772-42.014-6.567-67.3 8.963-25.286-15.531-49.042-18.738-67.3-8.963-18.241 9.763-28.7 31.187-28.7 58.788 0 52.787 88.461 100.715 92.227 102.729a8 8 0 0 0 7.546 0c3.766-2.014 92.227-49.942 92.227-102.729 0-27.601-10.459-49.025-28.7-58.788zm-43.3 82.463h-16v16h-16v-16h-16v-16h16v-16h16v16h16z" />
      </svg>
    );
  },
);
