import {
  Children,
  cloneElement,
  memo,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { isFragment } from 'react-is';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Color,
  ContainerProps,
  Fill,
  Orientation,
  Shadow,
  TextColor,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/button';
import { Container } from '../layout/container';
import { Label } from '../typography/label';

type TabProps = ContainerProps<{
  readonly label: string;
  readonly selected?: boolean;
  readonly visible?: boolean;
}>;

export const Tab = memo(
  ({ className = '', children, label, ...props }: TabProps): ReactElement => {
    return (
      <Container
        className={`${className} tab`}
        data-label={label}
        fill={Fill.Both}
        fadeIn
        {...props}
      >
        {children}
      </Container>
    );
  },
);

type TabsProps = ContainerProps;

export const Tabs = memo(
  ({ className = '', children, ...props }: TabsProps): ReactElement => {
    let initialIndex = 0;

    Children.forEach(
      isFragment(children) ? children.props.children : children,
      (child: React.ReactNode, key) => {
        // @ts-ignore
        if (child.props?.selected) initialIndex = key;
      },
    );

    const [currentTabIndex, setTabIndex] = useState(initialIndex);

    return (
      <Container
        alignVertical={AlignVertical.Stretch}
        className={`${className} tabs`}
        fill={Fill.Both}
        {...props}
      >
        <Container
          alignHorizontal={AlignHorizontal.Center}
          orientation={Orientation.Horizontal}
          className="tab-buttons"
          paddingBottom={Amount.Less}
        >
          {/* @ts-ignore */}
          {Children.map(
            isFragment(children) ? children.props.children : children,
            (c: ReactElement, key) => {
              if (c.props.visible === false) return;

              return (
                <Button
                  backgroundColor={BackgroundColor.Transparent}
                  borderRadius={Amount.None}
                  borderBottomColor={
                    currentTabIndex === key
                      ? Color.Primary
                      : BorderColor.Transparent
                  }
                  fill={Fill.None}
                  borderBottomWidth={2}
                  className={c.props.className}
                  onClick={() => {
                    setTabIndex(key);

                    if (
                      c.props.onClick &&
                      typeof c.props.onClick === 'function'
                    )
                      c.props.onClick();
                  }}
                  paddingLeft={Amount.Less}
                  paddingRight={Amount.Less}
                  key={key}
                  type={ButtonType.Transparent}
                >
                  <Label
                    textColor={
                      currentTabIndex === key
                        ? TextColor.Primary
                        : TextColor.Default
                    }
                  >
                    {c.props.label}
                  </Label>
                </Button>
              );
            },
          )}
        </Container>

        <Container className="tab-content" fill={Fill.Both}>
          {Children.map(
            isFragment(children) ? children.props.children : children,
            (c: ReactNode, key) => {
              if (key !== currentTabIndex) return;

              // @ts-ignore
              return cloneElement(c);
            },
          )}
        </Container>
      </Container>
    );
  },
);

// const TabButton = styled.button<{
//   readonly current?: boolean;
// }>`
//   ${FocusStyles};

//   background: transparent;
//   border: none;
//   border-bottom: 3px solid rgba(${BorderColor.Light}, 0.5);
//   color: var(--text-color-light);
//   cursor: pointer;
//   display: inline-block;
//   font-size: 14px;
//   font-weight: 600;
//   height: var(--amount-all);
//   line-height: var(--amount-all);
//   padding: 0 var(--amount-default);
//   position: relative;
//   text-align: center;
//   transition: background 0.2s ease-out, border 0.2s ease-out,
//     color 0.2s ease-out;
//   user-select: none;

//   &:before {
//     border-radius: ${Amount.Least};
//     top: -2px;
//     left: -2px;
//     right: -2px;
//     bottom: -2px;
//   }

//   * {
//     cursor: pointer;
//   }

//   ${props =>
//     props.current &&
//     css`
//       border-bottom: 3px solid var(--color-primary);
//       font-weight: 700;
//     `}
// `;
