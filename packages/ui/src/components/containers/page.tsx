// import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, ElementType, memo, ReactElement } from 'react';

import { AlignVertical, BackgroundColor, Fill, Overflow } from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { LoadingOverlay } from '../progress/loading-overlay';

export const Page = memo(
  ({
    backgroundColor = BackgroundColor.Default,
    children,
    overflow = Overflow.ScrollVertical,
    className = '',
    fill = Fill.Both,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    layout: Layout,
    alignVertical = AlignVertical.Top,
    state,
    // title,
    ...props
  }: ContainerProps<{
    readonly layout?: ElementType;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
  }>): ReactElement => {
    // useTitle(title ?? '');

    const PageComp = () => (
      <Container
        overflow={overflow}
        alignVertical={alignVertical}
        backgroundColor={backgroundColor}
        className={`${className} page`}
        fill={fill}
        {...props}
      >
        <LoadingOverlay
          state={{
            visible: Boolean(state?.loading),
          }}
        />

        {children}
      </Container>
    );

    const Child = () => {
      return Layout ? (
        cloneElement(<Layout {...props} />, props, <PageComp />)
      ) : (
        <PageComp />
      );
    };

    return <Child />;
  },
);
