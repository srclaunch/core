import { memo, ReactElement } from 'react';

import { Amount, BackgroundColor, Shadow } from '../../types';
import { ErrorBoundary } from '../errors/error-boundary';
import { Container, ContainerProps } from '../layout/container';
import { NavigationLink } from '../navigation/navigation-link';

export const Card = memo(
  ({
    backgroundColor = BackgroundColor.Card,
    borderRadius = Amount.Less,
    children,
    draggable = false,
    id,
    linkTo,
    padding = Amount.Default,
    shadow = Shadow.Higher,
    title,
    ...props
  }: ContainerProps<{
    readonly draggable?: boolean;
    readonly id?: string;
    readonly linkTo?: string;
    readonly title?: string;
  }>): ReactElement => {
    const content = (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`card${id ? `-${id}` : ''}`}
        padding={padding}
        shadow={shadow}
        {...props}
      >
        {title && <h4>{title}</h4>}

        <ErrorBoundary>{children}</ErrorBoundary>
      </Container>
    );

    if (draggable) {
      return (
        <Container className="draggable-card" {...props}>
          {content}
        </Container>
      );
    }

    if (linkTo) {
      return (
        <NavigationLink
          className="link-card"
          //   transition: box-shadow 0.3s ease-in-out;
          to={linkTo}
        >
          {content}
        </NavigationLink>
      );
    }

    return content;
  },
);
