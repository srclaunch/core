import { memo, ReactElement, SVGProps } from 'react';
export const PlayStore = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-play-store"
        x="0px"
        y="0px"
        viewBox="0 0 512.029 512.029"
        enableBackground="new 0 0 512.029 512.029"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <g>
            <path d="M111.758,8.189C91.726-2.883,68.206-2.627,48.302,8.349l233.28,215.2l78.368-78.368L111.758,8.189z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M24.974,30.365c-5.696,9.312-8.96,19.968-8.96,31.264v388.672c0,10.944,2.976,21.376,8.352,30.496l234.592-234.592
L24.974,30.365z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M463.854,202.525l-74.752-41.248l-84,83.968l102.944,94.944l55.84-30.816c20.096-11.136,32.128-31.104,32.128-53.44
C495.982,233.597,483.982,213.629,463.854,202.525z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M282.478,267.901L47.246,503.133c10.208,5.824,21.408,8.896,32.672,8.896c10.88,0,21.824-2.752,31.84-8.288
l266.784-147.232L282.478,267.901z"
            />
          </g>
        </g>
      </svg>
    );
  },
);
