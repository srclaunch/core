import { getIcon, Icons } from '@srclaunch/icons';
import { memo, ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { getContainerStyles } from '../../styles/container';
import {
  AlignHorizontal,
  AlignVertical,
  ForegroundColor,
  Sizes,
  States,
  TextColor,
  TextColors,
} from '../../types';
import { ContainerProps } from '../layout/container';
import { Image } from './image';

export type IconProps = ContainerProps & {
  readonly color?: ForegroundColor | TextColor;
  readonly component?: ReactElement;
  readonly name?: Icons;
  readonly path?: string;
  readonly svg?: ReactElement;
  readonly url?: string;
} & {
  readonly states?: States<IconProps>;
};

const Wrapper = styled.i<IconProps>`
  ${props => getContainerStyles(props)};

  svg {
    ${props =>
      props.color &&
      css`
        fill: ${props.color === 'inherit'
          ? 'currentColor'
          : `rgb(${props.color})`};
      `};
    height: 100%;
    width: 100%;
    transition: fill 0.13s ease-in-out;
  }
`;

export const Icon = memo(
  ({
    as = 'i',
    alignment = {},
    color = TextColors.Default,
    className = '',
    component,
    name,
    path,
    size = {},
    // svg,
    url,
    ...props
  }: IconProps): ReactElement => {
    const [IconComponent, setIconComponent] = useState<
      ReactElement | undefined
    >();
    const getIconComponent = async () => {
      if (component) {
        setIconComponent(component);
      }

      if (path) {
        setIconComponent(
          <Image alt="icon" className={`${className} icon`} path={path} />,
        );
      }

      if (url) {
        setIconComponent(
          <Image alt="icon" className={`${className} icon`} url={url} />,
        );
      }

      if (name) {
        const Ico = await getIcon(name);
        console.log('ico', Ico);
        setIconComponent(<Ico />);
      }
    };

    useEffect(() => {
      getIconComponent();
    }, []);

    return (
      <Wrapper
        alignment={{
          horizontal: AlignHorizontal.Center,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        as={as}
        color={color}
        className={`${className} icon`}
        size={{ height: Sizes.Default, width: Sizes.Default, ...size }}
        {...props}
      >
        {IconComponent}
      </Wrapper>
    );
  },
);
