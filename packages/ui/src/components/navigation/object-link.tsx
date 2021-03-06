import { memo, ReactElement } from 'react';
import styled from 'styled-components';

export const ObjectLink = memo(
  ({
    children,
    disabled,
    onClick,
    ...props
  }: {
    readonly children?: React.ReactNode;
    readonly disabled?: boolean;
    readonly onClick: () => void;
  }): ReactElement => {
    return (
      <Container onClick={onClick} {...props}>
        {children}
      </Container>
    );
  },
);

const Container = styled.button`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  display: block;
  width: 100%;

  &:after {
    clear: both;
    content: '';
    display: block;
  }

  &:hover {
    border: 1px solid #eee;
    cursor: pointer !important;
  }

  &:active {
    border: 1px solid rgba(65, 145, 63, 1);
  }

  &.disabled {
    cursor: default !important;
    border: none;
  }
`;
