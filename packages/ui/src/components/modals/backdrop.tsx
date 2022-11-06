import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { BackgroundColor, ContainerProps, Position } from '../../types';
import { Container } from '../layout/container';

type BackdropProps = ContainerProps;

export const Backdrop = memo(
  ({
    as = 'div',
    backgroundColor = BackgroundColor.Darker,
    children,
    className = '',
    state,
    ...props
  }: BackdropProps): ReactElement => {
    return (
      <Container
        as={as}
        backgroundColor={backgroundColor}
        className={`${className} backdrop`}
        position={Position.Absolute}
        positionBottom={0}
        positionLeft={0}
        positionRight={0}
        positionTop={0}
        state={{
          visible: false,
          ...state,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
