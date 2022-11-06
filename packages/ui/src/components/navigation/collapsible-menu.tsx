import { BasicIcons } from '@srclaunch/icons';
import { ComponentType, memo, ReactNode, useState } from 'react';

import { Amount, Cursor, Fill, Overflow, Size } from '../../types';
import { Container, ContainerProps } from '../layout';
import { Label } from '../typography';

export type CollapsibleMenuItem = ContainerProps<{
  readonly content?: ComponentType<unknown> | ReactNode;
  readonly items?: readonly CollapsibleMenuItem[];
  readonly label?: string;
  readonly to?: string;
}>;

export type CollapsibleMenuProps = ContainerProps<{
  readonly items: readonly CollapsibleMenuItem[];
}>;

export const CollapsibleMenu = memo(
  ({
    className = '',
    fill = Fill.Both,
    overflow = Overflow.ScrollVertical,
    padding = Amount.Least,
    items,
    ...props
  }: CollapsibleMenuProps) => {
    const [menuState, setMenuState] = useState(
      items.map(() => ({
        collapsed: true,
      })),
    );

    const renderItems = (menuItems: readonly CollapsibleMenuItem[] = []) => {
      return menuItems.map((item, index) => {
        return (
          <Container
            as="details"
            key={index}
            onToggle={() => {
              setMenuState(
                menuState.map((menu, mIndex) => ({
                  collapsed:
                    mIndex === index ? !menu.collapsed : menu.collapsed,
                })),
              );
            }}
          >
            <Label
              as="summary"
              cursor={Cursor.Pointer}
              icon={{
                marginRight: Amount.Least,
                name: BasicIcons.CaretDownArrow,
                rotate: menuState[index]?.collapsed ? -90 : 0,
                size: Size.Smallest,
              }}
              paddingLeft={Amount.Less}
              textSelectable={false}
            >
              {item.label}
            </Label>

            {item.content && (
              <Container fill={Fill.Both}>{item.content}</Container>
            )}

            {item.items && renderItems(item.items)}
          </Container>
        );
      });
    };

    return (
      <Container
        padding={padding}
        overflow={overflow}
        className={`${className} collapsible-menu`}
        fill={fill}
        {...props}
      >
        {renderItems(items)}
      </Container>
    );
  },
);
