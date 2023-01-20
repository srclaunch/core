import { cloneElement, ElementType, memo, ReactElement } from 'react';

// import { useTitle } from '@srclaunch/react-hooks';
import {
    AlignHorizontal,
    AlignVertical,
    Amount,
    BackgroundColor,
    Fill,
    Orientation,
    Overflow,
    Size
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { LoadingOverlay } from '../progress/loading-overlay';
import { SubTitle } from '../typography/sub-title';
import { Title } from '../typography/title';

export const Workspace = memo(
  ({
    backgroundColor = BackgroundColor.Default,
    className = '',
    overflow = Overflow.ScrollVertical,
    children,
    actions,
    title,
    subTitle,
    alignVertical = AlignVertical.Top,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    layout: Layout,
    fill = Fill.Both,
    // loginRequired = false,
    padding = Amount.Most,
    state,
    // title,
    ...props
  }: ContainerProps<{
    readonly actions?: ReactElement;
    readonly layout?: ElementType;
    readonly loginRequired?: boolean;
    readonly subTitle?: string;
    readonly title?: ReactElement | string;
  }>): ReactElement => {
    // useTitle(title ?? '');

    const getWorkspaceComp = () => (
      <Container
        overflow={overflow}
        alignVertical={alignVertical}
        backgroundColor={backgroundColor}
        className={`${className} workspace`}
        padding={padding}
        fill={fill}
        state={state}
        {...props}
      >
        <LoadingOverlay state={{ visible: Boolean(state?.loading) }} />

        {(title || actions) && (
          <Container
            alignHorizontal={AlignHorizontal.Stretch}
            orientation={Orientation.Horizontal}
            alignVertical={AlignVertical.Top}
            className="workspace-header"
            marginBottom={Amount.Full}
          >
            {(title || subTitle) && (
              <Container fill={Fill.Horizontal}>
                {title && (
                  <Container className="workspace-title">
                    {typeof title === 'string' ? (
                      <Title lineHeight={Size.Default}>{title}</Title>
                    ) : (
                      title
                    )}
                  </Container>
                )}

                {subTitle && (
                  <Container className="workspace-sub-title">
                    <SubTitle>{subTitle}</SubTitle>
                  </Container>
                )}
              </Container>
            )}

            {actions && (
              <Container
                alignHorizontal={AlignHorizontal.Right}
                className="workspace-actions"
              >
                {actions}
              </Container>
            )}
          </Container>
        )}

        {children}
      </Container>
    );

    const getChild = (): ReactElement => {
      if (Layout) {
        return cloneElement(
          <Layout scrollable {...props} />,
          props,
          getWorkspaceComp(),
        );
      }

      return getWorkspaceComp();
    };

    return getChild();
  },
);
