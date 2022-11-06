import { memo, ReactElement } from 'react';

// import { Amount, BackgroundColor, Depth, Workspace } from '../../../ui';
import { Documentation } from '../layouts/documentation';

export const Introduction = memo((): ReactElement => {
  return (
    // <Workspace
    //   background={{ color: BackgroundColor.Default }}
    //   depth={Depth.Low}
    //   header={{
    //     title: 'Introduction',
    //   }}
    //   layout={Documentation}
    //   padding={{ all: Amount.Most }}
    //   title="Introduction"
    // >
    <div>Intro</div>

    // </Workspace>
  );
});
