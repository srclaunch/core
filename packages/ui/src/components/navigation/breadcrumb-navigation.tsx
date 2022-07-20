import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  DepthShadow,
  Fill,
  Orientation,
  Sizes,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
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
    shadow = DepthShadow.Surface,
    size = {},
    textSize = TextSize.Default,
    ...props
  }: BreadcrumbNavigationProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          ...alignment,
        }}
        className={`${className} menu`}
        shadow={shadow}
        size={{
          fill: Fill.Both,
          ...size,
        }}
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
                states={{
                  hovered: {
                    textDecoration: {
                      line: TextDecorationLine.Underline,
                    },
                  },
                }}
                textDecoration={{
                  line: TextDecorationLine.None,
                }}
              >
                <Title
                  lineHeight={Sizes.Default}
                  textColor={TextColors.Primary}
                  textSize={textSize}
                  textWeight={TextWeight.Most}
                >
                  {label}
                </Title>
              </NavigationLink>
            ) : (
              <Title
                lineHeight={Sizes.Default}
                textSize={textSize}
                textWeight={TextWeight.Most}
              >
                {label}
              </Title>
            )}

            {index !== items.length - 1 && (
              <Icon
                name={DualLightIcons.ChevronDoubleRight}
                margin={{ left: Amount.Less, right: Amount.Less }}
                size={{ height: textSize, width: textSize }}
              />
            )}
          </Container>
        ))}
      </Container>
    );
  },
);
