import { memo, ReactElement, SVGProps } from 'react';
export const Institution = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-institution"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <g>
            <path d="M492,192c11.046,0,20-8.954,20-20V96c0-8.684-5.604-16.375-13.869-19.037l-236-76c-3.986-1.283-8.275-1.283-12.262,0 l-236,76C5.604,79.625,0,87.316,0,96v76c0,11.046,8.954,20,20,20h30v204H20c-11.046,0-20,8.954-20,20v76c0,11.046,8.954,20,20,20 h472c11.046,0,20-8.954,20-20v-76c0-11.046-8.954-20-20-20h-30V192H492z M472,436v36H40v-36C54.155,436,466.627,436,472,436z M90,396V192h36v204H90z M166,396V192h32v204H166z M238,396V192h36v204H238z M314,396V192h32v204H314z M386,396V192h36v204H386z M40,152v-41.429l216-69.56l216,69.56V152C469.77,152,44.092,152,40,152z" />
          </g>
        </g>
        <g>
          <g>
            <circle cx="256" cy="106" r="25" />
          </g>
        </g>
      </svg>
    );
  },
);
