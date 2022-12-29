// import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, ElementType, memo, ReactElement } from 'react';

import { BackgroundColor, Fill, Orientation } from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { LoadingOverlay } from '../progress/loading-overlay';

export const Page = memo(
  ({
    backgroundColor = BackgroundColor.Default,
    children,
    className = '',
    fill = Fill.Horizontal,
    orientation = Orientation.Vertical,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    layout: Layout,
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
        backgroundColor={backgroundColor}
        className={`${className} page`}
        fill={fill}
        orientation={orientation}
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
