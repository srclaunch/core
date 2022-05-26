import { memo, ReactElement, SVGProps } from 'react';
export const HealthCross = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-health-cross"
        viewBox="0 0 469.333 469.333"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m437.333 149.333h-117.333v-117.333c0-17.643-14.357-32-32-32h-106.667c-17.643 0-32 14.357-32 32v117.333h-117.333c-17.643 0-32 14.357-32 32v106.667c0 17.643 14.357 32 32 32h117.333v117.333c0 17.643 14.357 32 32 32h106.667c17.643 0 32-14.357 32-32v-117.333h117.333c17.643 0 32-14.357 32-32v-106.667c0-17.642-14.357-32-32-32z" />
      </svg>
    );
  },
);
