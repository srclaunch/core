import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColors,
  Page,
  Paragraph,
  Title,
} from '@srclaunch/ui';
import { RootState, useSelector } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import { NotAuthenticated } from '../layouts/NotAuthenticated';
// import { PageRole } from '@srclaunch/types';
// import NotAuthenticated from '../layouts/NotAuthenticated';
// import styled from 'styled-components';
import { WebApp } from '../layouts/WebApp';

export const PageNotFound = memo((): ReactElement => {
  const loggedIn = useSelector(
    (state: RootState) => state.user.authentication.loggedIn,
  );

  return (
    <Page
      alignment={{
        horizontal: AlignHorizontal.Center,
        vertical: AlignVertical.Center,
      }}
      background={{ color: BackgroundColors.Lighter }}
      layout={loggedIn ? WebApp : NotAuthenticated}
      title="AppLab - Page not found"
    >
      <Title>Page Not Found</Title>
      <Paragraph
      // alignText={Align.Center}
      >
        We couldn't find the page you're looking for.{' '}
      </Paragraph>
    </Page>
  );
});

// const Container = styled.div`
//   background: white;
//   flex: 1;

//   p {
//     color: #858a8f;
//     font-weight: 500;
//     font-size: 14px;
//     margin: 15px 0 35px 0;
//     line-height: 28px;
//     text-align: center;
//   }
// `;

// const ResponsiveContainer = styled.div``;
