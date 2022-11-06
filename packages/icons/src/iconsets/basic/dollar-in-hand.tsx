import { memo, ReactElement, SVGProps } from 'react';
export const DollarInHand = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-dollar-in-hand"
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m96 112a56 56 0 1 0 -56-56 56.064 56.064 0 0 0 56 56zm-24-40h28a4 4 0 0 0 0-8h-8a20 20 0 0 1 -4-39.6v-8.4h16v8h16v16h-28a4 4 0 0 0 0 8h8a20 20 0 0 1 4 39.6v8.4h-16v-8h-16z" />
        <path d="m147 155c-10.438 6.71-15.873 13.641-17.963 15.207a3.984 3.984 0 0 1 -2.391.793h-29.7a4.012 4.012 0 0 1 -1.789-.422l-15.157-10.578c32 0 36.216-11.507 38.836-18.586a4.005 4.005 0 0 0 -3.745-5.414h-115.091v40h47.056a4.012 4.012 0 0 1 1.789.422l30.31 15.156a4.012 4.012 0 0 0 1.789.422h53.4a4 4 0 0 0 2.829-1.172l30.827-30.828c2.828-2.828-11.483-11.118-21-5z" />
      </svg>
    );
  },
);
