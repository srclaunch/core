import { memo, ReactElement, SVGProps } from 'react';
export const Home = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        enableBackground="new 0 0 49.794 49.794"
        id="applab-icon-basic-home"
        viewBox="0 0 49.794 49.794"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m5.965 29.682v19.236c0 .482.392.876.876.876h20.645v-17.418h9.698v17.418h5.77c.484 0 .876-.394.876-.876v-19.236l-18.921-18.84zm15.396 10.808h-8.751v-8.113h8.751z" />
        <path d="m47.665 22.765-22.767-22.765-10.74 10.739v-4.726c0-1.104-.896-2-2-2s-2 .896-2 2v8.726l-8.027 8.026c-.977.977-.977 2.559 0 3.536.488.488 1.128.732 1.768.732s1.279-.244 1.768-.73l19.232-19.23 19.23 19.229c.977.978 2.559.978 3.534 0 .977-.978.977-2.561.002-3.537z" />
      </svg>
    );
  },
);
