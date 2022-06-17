import { memo, ReactElement, SVGProps } from 'react';
export const WaterSpigot = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-water-spigot"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m212 30v-30h-90v30h-90v30h270v-30z" />
        <path d="m482 322v-35c0-74.439-60.561-135-135-135h-105v-32h30v-30h-210v30h30v32h-92v140h93.517c19.555 19.145 45.963 30 73.483 30 27.519 0 53.927-10.855 73.482-30h76.518c8.271 0 15 6.729 15 15v15h-30v30h210v-30z" />
        <path d="m407 352.002-48.022 64.022c-7.836 10.448-11.978 22.889-11.978 35.976 0 33.084 26.916 60 60 60s60-26.916 60-60c0-13.088-4.142-25.528-11.979-35.976z" />
      </svg>
    );
  },
);
