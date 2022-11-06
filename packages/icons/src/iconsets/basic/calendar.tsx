import { memo, ReactElement, SVGProps } from 'react';
export const Calendar = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-icon-calendar"
        enableBackground="new 0 0 24 24"
        height="512"
        viewBox="0 0 24 24"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <path d="m20 4h-1v-2h-2v2h-10v-2h-2v2h-1c-1.1 0-2 .9-2 2h20c0-1.1-.9-2-2-2z" />
          <path d="m2 20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12h-20zm15-10h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm-4-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2z" />
        </g>
      </svg>
    );
  },
);
