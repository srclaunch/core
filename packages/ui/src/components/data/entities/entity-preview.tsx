// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Model } from '@srclaunch/types';
import { Model } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Container } from '../../layout/container';
import { LoadingOverlay } from '../../progress/loading-overlay';

// import Edit from './Edit';
// import AccountMoreMenu from './MoreMenu';
// import New from './New';
// import Preview from './Preview';

export const EntityPreview = memo(
  ({
    id,
    model,
  }: {
    readonly id?: string;
    readonly model: Model;
  }): ReactElement => {
    return (
      <Container data-testid="account-pane">
        <LoadingOverlay
          state={{
            visible: false,
          }}
        />
      </Container>
    );
  },
);
