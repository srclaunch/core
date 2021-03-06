import { memo, ReactElement, SVGProps } from 'react';
export const OnlineShopping = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement<SVGElement> => {
    return (
      <svg
        id="applab-icon-basic-online-shopping"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 490.667 490.667"
        enableBackground="new 0 0 490.667 490.667"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M0,341.333V352c0,29.867,23.467,53.333,53.333,53.333h160v21.333h-74.667c-29.867,0-53.333,23.467-53.333,53.333
c0,6.4,4.267,10.667,10.667,10.667h298.667c6.4,0,10.667-4.267,10.667-10.667c0-2.133,0-2.133,0-4.267
C403.2,448,379.733,426.667,352,426.667h-74.667v-21.333h160c29.867,0,53.333-23.467,53.333-53.333v-10.667H0z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M437.333,0h-384C23.467,0,0,23.467,0,53.333V320h490.667V53.333C490.667,23.467,467.2,0,437.333,0z M224,298.667
c-17.067,0-32-14.933-32-32c0-17.067,14.933-32,32-32c17.067,0,32,14.933,32,32C256,283.733,241.067,298.667,224,298.667z
M309.333,298.667c-17.067,0-32-14.933-32-32c0-17.067,14.933-32,32-32s32,14.933,32,32
C341.333,283.733,326.4,298.667,309.333,298.667z M362.667,183.467c0,4.267-4.267,8.533-8.533,8.533L185.6,211.2l8.533,29.867
c2.133,6.4-2.133,10.667-8.533,12.8h-2.133c-4.267,0-8.533-4.267-10.667-8.533l-42.667-160H96c-6.4,0-10.667-4.267-10.667-10.667
C85.333,68.267,89.6,64,96,64h42.667c4.267,0,8.533,4.267,10.667,8.533l4.267,12.8h219.733c4.267,0,6.4,2.133,8.533,4.267
C384,91.733,384,96,384,98.133L362.667,183.467z"
            />
          </g>
        </g>
      </svg>
    );
  },
);
