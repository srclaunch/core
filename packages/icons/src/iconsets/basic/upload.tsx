import { memo, ReactElement, SVGProps } from 'react';

export const Upload = memo((props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 488.4 488.4"
      enableBackground="new 0 0 488.4 488.4"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M483.6,295.2l-69.5-107.4c-5.4-8.3-14.5-13.3-24.4-13.3H359c-4.5,0-7.2,5-4.7,8.7l75,116c1,1.5-0.1,3.5-1.9,3.5h-32.9
			    h-26.8H342c-3.1,0-5.5,2.5-5.7,5.5c-2.9,48.4-43,86.8-92.2,86.8s-89.3-38.4-92.2-86.8c-0.2-3.1-2.6-5.5-5.7-5.5h-25.7h-23H60.9
			    c-1.8,0-2.8-2-1.9-3.5l75-116c2.4-3.8-0.3-8.7-4.7-8.7H98.6c-9.9,0-19,5-24.4,13.3L4.8,295.2C1.7,300,0,305.7,0,311.5v149.6
			    c0,14.6,11.9,26.5,26.5,26.5h217.7h217.7c14.6,0,26.5-11.9,26.5-26.5V311.5C488.4,305.7,486.8,300.1,483.6,295.2z"
        />
        <path
          d="M252.2,4.7c-4.1-5.2-12-5.2-16.1,0l-65.9,83.8c-5.3,6.7-0.5,16.6,8,16.6h26v158.3c0,22.1,17.9,40,40,40l0,0
			    c22.1,0,40-17.9,40-40V105h26c8.5,0,13.3-9.9,8-16.6L252.2,4.7z"
        />
      </g>
    </svg>
  );
});
