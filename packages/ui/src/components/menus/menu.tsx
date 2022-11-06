import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColor,
  Fill,
  Overflow,
  Shadow,
  TextSize,
} from '../../types';
import { TextColor } from '../../types/typography/color';
import { Container, ContainerProps } from '../layout/container';
import { Scrollable } from '../layout/scrollable';
import { Label } from '../typography/label';
import { MenuItem, MenuItemProps } from './menu-item';

export type MenuProps<P = Record<string, unknown>> = ContainerProps<
  P & {
    readonly items?: readonly MenuItemProps[];
    readonly onItemClick?: (item: MenuItemProps) => void;
  }
>;

export const Menu = memo(
  ({
    as = 'nav',
    borderRadius = Amount.Least,
    className = '',
    items = [],
    backgroundColor = BackgroundColor.Lighter,
    padding = Amount.Least,
    onItemClick,
    ...props
  }: MenuProps): ReactElement => {
    const renderItems = () => {
      return items.map((item, key: number) => {
        return (
          <Container key={key}>
            {item.title && (
              <Label textSize={TextSize.Smaller}>{item.title}</Label>
            )}

            <MenuItem
              borderRadius={Amount.Least}
              fill={Fill.Horizontal}
              onClick={() => {
                if (onItemClick) {
                  onItemClick(item);
                }
              }}
              paddingLeft={Amount.Less}
              paddingRight={Amount.Less}
              current={{
                backgroundColor: BackgroundColor.Primary,
                // lineHeight: Size.Large,
                textColor: TextColor.PrimaryContrast,
                // shadow: {
                //   radius: 5,
                //   color: BackgroundColor.Primary,
                //   offsetX: 0,
                //   offsetY: 1,
                //   opacity: 35,
                //   spreadRadius: 3,
                // },
              }}
              focused={{
                textColor: TextColor.PrimaryContrast,
              }}
              hovered={{
                backgroundColor: BackgroundColor.Light,
                textColor: TextColor.Darker,
              }}
              textSize={TextSize.Small}
              {...item}
            />
          </Container>
        );
      });
    };

    return (
      <Scrollable
        as={as}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} menu`}
        shadow={Shadow.Low}
        overflow={Overflow.ScrollVertical}
        padding={padding}
      >
        {renderItems()}
      </Scrollable>
    );
  },
);
