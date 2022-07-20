// import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, ElementType, memo, ReactElement } from 'react';

import { AlignVertical, BackgroundColors, Fill, Overflow } from '../../types';
import {
  Container,
  ContainerProps as ContainerProperties,
} from '../layout/container';
import { LoadingOverlay } from '../progress/loading-overlay';

type PageProperties = ContainerProperties & {
  readonly layout?: ElementType;
  readonly loading?: boolean;
  readonly loginRequired?: boolean;
  readonly title?: string | null;
};

export const Page = memo(
  ({
    alignment = {},
    background = {},
    children,
    className = '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    layout: Layout,
    states = {},
    size = {},
    // title,
    ...properties
  }: PageProperties): ReactElement => {
    // useTitle(title ?? '');

    const PageComp = () => (
      <Container
        alignment={{
          overflow: Overflow.ScrollVertical,
          vertical: AlignVertical.Top,
          ...alignment,
        }}
        background={{ color: BackgroundColors.Page, ...background }}
        className={`${className} page`}
        states={states}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...properties}
      >
        <LoadingOverlay
          states={{
            state: {
              visible: Boolean(states.state?.loading),
            },
          }}
        />

        {children}
      </Container>
    );

    const Child = () => {
      return Layout ? (
        cloneElement(<Layout {...properties} />, properties, <PageComp />)
      ) : (
        <PageComp />
      );
    };

    return <Child />;
  },
);
