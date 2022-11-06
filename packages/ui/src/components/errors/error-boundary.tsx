import { Exception } from '@srclaunch/exceptions';
import { Logger } from '@srclaunch/logger';
import { Component } from 'react';

import { ErrorLabel } from '../typography';

type ComponentProps = Record<string, unknown>;
type ComponentState = {
  readonly exception?: Exception;
  readonly hasError: boolean;
};

export class ErrorBoundary extends Component<ComponentProps, ComponentState> {
  private constructor(props: ComponentProps | Readonly<ComponentState>) {
    super(props);
    this.state = { exception: undefined, hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  static getDerivedStateFromError(error: Error): {
    readonly exception: Exception;
    readonly hasError: boolean;
  } {
    const logger = new Logger();
    const exception = new Exception(error.name + ': ' + error.message, {
      cause: error,
    });
    logger.exception(exception.toJSON());

    return { exception, hasError: true };
  }

  // public override componentDidCatch(error: Error): void {}

  public override render(): React.ReactNode {
    return (
      <>
        {this.state.hasError && (
          <ErrorLabel>{this.state.exception?.message}</ErrorLabel>
        )}

        {this.props.children}
      </>
    );
  }
}
