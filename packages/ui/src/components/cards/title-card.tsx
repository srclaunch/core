import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  BackgroundColor,
  Orientation,
  Shadow,
  Size,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Icon, IconProps } from '../media/icon';
import { LoadingOverlay } from '../progress/loading-overlay';
import { Small } from '../typography/small';
import { Title } from '../typography/title';

/**
 * A card with a title and an icon.
 *
 * @example - Basic usage
 * ```json
 *  { icon: BasicIcons.Globe, label: 'Title' }
 * ```
 */
export const TitleCard = memo(
  ({
    backgroundColor = BackgroundColor.Card,
    borderRadius = Amount.Least,
    className = '',
    label,
    orientation = Orientation.Horizontal,
    padding = Amount.Default,
    value,
    icon,
    shadow = Shadow.High,
    width = 260,
    state,
    ...props
  }: ContainerProps<{
    readonly icon?: IconProps;
    readonly label?: string;
    readonly loading?: boolean;
    readonly value?: number;
  }>): ReactElement => {
    return (
      <Container
        orientation={orientation}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} title-card`}
        padding={padding}
        shadow={shadow}
        width={width}
        {...props}
      >
        <LoadingOverlay
          spinnerSize={Size.Small}
          state={{
            visible: Boolean(state?.loading),
          }}
        />
        {icon && (
          <Icon marginRight={Amount.Default} size={Size.Large} {...icon} />
        )}
        {!state?.loading && (
          <Container
            orientation={Orientation.Vertical}
            alignVertical={AlignVertical.Center}
          >
            <Small>{label}</Small>

            <Title lineHeight={Size.Default}>{value}</Title>
          </Container>
        )}
      </Container>
    );
  },
);

// const Container = styled.div`
//   overflow: hidden;
//   overflow-x: scroll;

//   &::-webkit-scrollbar {
//     height: 7px;
//     margin-left: 25px;
//     position: relative;
//     left: 7px;
//     background: transparent;
//   }

//   &::-webkit-scrollbar-thumb {
//     height: 7px;
//     background: rgba(0, 0, 0, 0.08);
//     border-radius: 10px;
//   }
// `;

// const Card = styled.div<{
//   card?: boolean;
// }>`
//   background: white;
//   border-radius: 10px;
//   padding: 15px;
//   position: relative;

//   ${(props) =>
//     props.card === true &&
//     css`
//       box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
//     `}
// `;
