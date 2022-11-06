import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Color, Size } from '../../types';
import { Container, ContainerProps } from '../layout/container';

export type SvgProps = ContainerProps & {
  readonly color?: Color;
  readonly path?: string;
  readonly url?: string;
};

const SvgMedia = styled.svg<SvgProps>`
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    fill: rgb(${props => props.color});
  }
`;

export const Svg = memo(
  ({
    as = 'span',
    children,
    className = '',
    size = Size.Default,
    ...props
  }: SvgProps): ReactElement => {
    return (
      <Container as={as} className={`${className} svg`} size={size} {...props}>
        {children}
      </Container>
    );
  },
);
