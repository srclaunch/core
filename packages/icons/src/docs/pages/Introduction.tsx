import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth, Workspace } from '@srclaunch/ui';
import { Documentation } from '../layouts/Documentation';

export const Introduction = memo((): ReactElement => {
  return (
    <Workspace
      background={{ color: BackgroundColors.Default }}
      depth={Depth.Low}
      header={{
        title: 'Introduction',
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="Introduction"
    ></Workspace>
  );
});
