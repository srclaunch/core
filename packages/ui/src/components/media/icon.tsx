import { getIcon, Icons } from '@srclaunch/icons';
import { ElementType, memo, ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { getContainerStateStyles, getContainerStyles } from '../../styles';
import {
  AlignHorizontal,
  AlignVertical,
  Fill,
  IconColor,
  Size,
  StateProps,
} from '../../types';
import { ContainerProps } from '../layout';
import { Image } from './image';

type IconPropsType = ContainerProps<
  {
    readonly color?: IconColor;
    readonly component?: ReactElement;
    readonly name?: Icons;
    readonly path?: string;
    readonly svg?: ReactElement;
    readonly url?: string;
  },
  HTMLSpanElement
>;

export type IconProps = IconPropsType & StateProps<IconPropsType>;

const Wrapper = styled.i<IconProps & { readonly fillProp?: Fill }>`
  ${props =>
    //  @ts-ignore
    getContainerStyles(props)};
  ${props => getContainerStateStyles(props)};

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
    as = 'span',
    color = IconColor.Default,
    className = '',
    component,
    name,
    path,
    size = Size.Default,
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
          <Image
            alt="icon"
            className={`${className} icon`}
            path={path}
            size={size}
          />,
        );
      }

      if (url) {
        setIconComponent(
          <Image
            alt="icon"
            className={`${className} icon`}
            size={size}
            url={url}
          />,
        );
      }

      if (name) {
        const Ico = (await getIcon(name)) as unknown as ElementType;

        setIconComponent(<Ico />);
      }
    };

    useEffect(() => {
      getIconComponent();
    }, []);

    return (
      <Wrapper
        alignVertical={AlignVertical.Center}
        alignHorizontal={AlignHorizontal.Center}
        as={as}
        color={color}
        className={`${className} icon`}
        fillProp={Fill.None}
        height={size}
        width={size}
        {...props}
      >
        {IconComponent}
      </Wrapper>
    );
  },
);
