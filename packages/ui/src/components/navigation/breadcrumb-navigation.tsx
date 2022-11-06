import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  ContainerProps,
  Fill,
  Orientation,
  Shadow,
  Size,
  TextColor,
  TextDecorationPosition,
  TextSize,
  TextWeight,
} from '../../types';
import { Container } from '../layout/container';
import { Icon } from '../media/icon';
import { TextProps } from '../typography/text';
import { Title } from '../typography/title';
import { NavigationLink } from './navigation-link';

export type BreadcrumbNavigationProps = ContainerProps &
  TextProps & {
    readonly items: readonly {
      readonly label?: string;
      readonly path?: string;
    }[];
  };

export const BreadcrumbNavigation = memo(
  ({
    alignment = {},
    className = '',
    items = [],
    orientation = Orientation.Horizontal,
    shadow = Shadow.Surface,
    fill = Fill.Both,

    textSize = TextSize.Default,
    ...props
  }: BreadcrumbNavigationProps): ReactElement => {
    return (
      <Container
        orientation={orientation}
        className={`${className} menu`}
        shadow={shadow}
        fill={fill}
        {...props}
      >
        {items.map(({ label, path }, index) => (
          <Container
            alignment={{
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.Center,
            }}
            key={index}
          >
            {path ? (
              <NavigationLink
                to={path}
                hovered={{
                  textDecorationPosition: TextDecorationPosition.Underline,
                }}
                textDecorationPosition={TextDecorationPosition.None}
              >
                <Title
                  lineHeight={Size.Default}
                  textColor={TextColor.Primary}
                  textSize={textSize}
                  textWeight={TextWeight.Most}
                >
                  {label}
                </Title>
              </NavigationLink>
            ) : (
              <Title
                lineHeight={Size.Default}
                textSize={textSize}
                textWeight={TextWeight.Most}
              >
                {label}
              </Title>
            )}

            {index !== items.length - 1 && (
              <Icon
                name={DualLightIcons.ChevronDoubleRight}
                marginLeft={Amount.Less}
                marginRight={Amount.Less}
                height={textSize}
                width={textSize}
              />
            )}
          </Container>
        ))}
      </Container>
    );
  },
);
