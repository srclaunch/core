import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  Fill,
  Page,
  Paragraph,
  TextAlign,
  Title,
} from '@srclaunch/ui';
import { RootState, useSelector } from '@srclaunch/web-app-state';
import { memo, ReactElement } from 'react';

import { NotAuthenticated } from '../layouts/NotAuthenticated';
// import { PageRole } from '@srclaunch/types';
// import NotAuthenticated from '../layouts/NotAuthenticated';
// import styled from 'styled-components';
import { WebApp } from '../layouts/web-app';

export const PageNotFound = memo((): ReactElement => {
  const loggedIn = useSelector(
    (state: RootState) => state.user.authentication.loggedIn,
  );

  return (
    <Page
      alignHorizontal={AlignHorizontal.Center}
      alignVertical={AlignVertical.Center}
      backgroundColor={BackgroundColor.Lighter}
      layout={loggedIn ? WebApp : NotAuthenticated}
      title="AppLab - Page not found"
    >
      <Title
        alignHorizontal={AlignHorizontal.Center}
        alignVertical={AlignVertical.Center}
        textAlign={TextAlign.Center}
      >
        Page Not Found
      </Title>
      <Paragraph
        alignHorizontal={AlignHorizontal.Center}
        alignVertical={AlignVertical.Center}
        textAlign={TextAlign.Center}
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
