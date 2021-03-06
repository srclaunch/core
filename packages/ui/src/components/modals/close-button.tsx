import { BasicIcons } from '@srclaunch/icons';
import { DefaultValue } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Depth,
  ForegroundColors,
  Sizes,
} from '../../types';
import { Button, ButtonProps } from '../forms/buttons/button';
import { Icon } from '../media/icon';

export type CloseButtonProps = ButtonProps;

export const CloseButton = memo(
  ({
    background = {},
    icon = {},
    className = '',
    size = {},
    ...props
  }: CloseButtonProps): ReactElement => {
    return (
      <Button
        alignment={{
          horizontal: AlignHorizontal.Center,
          vertical: AlignVertical.Center,
        }}
        background={{ color: BackgroundColors.CloseButton, ...background }}
        borderRadius={{ all: Amount.All }}
        className={`${className} close-button`}
        depth={Depth.Higher}
        form="null"
        icon={{
          name: BasicIcons.Close,
          size: {
            height: Sizes.Default,
            width: Sizes.Default,
          },
          ...icon,
        }}
        size={{
          height: Sizes.Default,
          width: Sizes.Default,
          ...size,
        }}
        states={{
          hovered: {
            background: { color: BackgroundColors.Primary },
            icon: { color: ForegroundColors.PrimaryContrast },
          },
        }}
        {...props}
      >
        <Icon
          color={ForegroundColors.CloseButton}
          name={BasicIcons.Close}
          size={{ height: Sizes.Smaller, width: Sizes.Smaller }}
          states={
            {
              // hovered: {
              //   color: ForegroundColors.PrimaryContrast,
              // },
            }
          }
          {...icon}
        />
      </Button>
    );
  },
);

// const Container = styled.button<CloseButtonProps>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${FocusedStyles};
//   ${DimensionStyles};

//   border: none;
//   // border-radius: var(--size-${props => props.size});
//   cursor: pointer;
//   // height: var(--size-${props => props.size});
//   //flex-basis: var(--size-${props => props.size});
//   //line-height: var(--size-${props => props.size});
//   outline: none;
//   //position: relative;
//   //transition: background 0.1s ease-in-out;
//   //width: var(--size-${props => props.size});

//   &:active {
//     opacity: 0.5;
//   }

//   &:before {
//     border-radius: ${Amount.All};
//   content: '';
//   display: flex;
//   border: 2px solid rgba(var(--color-secondary-rgb), 0.6);
//   flex: 0;
//   opacity: 0;
//   padding: 8px;
//   position: absolute;
//   top: -5px;
//   left: -5px;
//   right: -5px;
//   bottom: -5px;
//   transition: border 0.2s ease-in-out;
// }

//&:before {
//  &:after {
//    opacity: 1;
//  }
//}

/* div {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;

    &:before,
    &:after {
      position: absolute;
      background: $ {props => props.iconColor};
      content: '';
      display: inline-block;
      height: calc(100% / 3);
      transition: background 0.1s ease-in-out;
      width: 2px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  } */
// `;
