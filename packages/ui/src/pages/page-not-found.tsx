import { memo, ReactElement } from 'react';

// import {
//   AlignHorizontal,
//   AlignVertical,
//   Amount,
//   Container,
//   Page,
//   Paragraph,
//   Title,
//   Workspace,
// } from '../../../ui';
// import componentLibrary from '../component-library';
// import { PageRole } from '@srclaunch/types';
// import NotAuthenticated from '../layouts/NotAuthenticated';
// import styled from 'styled-components';
// import { Documentation } from '../../../../ts-docs/src/layouts/documentation';
export const PageNotFound = memo((): ReactElement => {
  return (
    <>404</>
    // <Page
    //   layout={Documentation}
    //   padding={{ all: Amount.Most }}
    //   // title={`Page not found - ${componentLibrary.name}`}
    // >
    //   <Container
    //     alignment={{
    //       horizontal: AlignHorizontal.Center,
    //       vertical: AlignVertical.Center,
    //     }}
    //     padding={{
    //       all: Amount.Full,
    //     }}
    //   >
    //     <Title
    //       alignment={{ vertical: AlignVertical.Bottom }}
    //       margin={{ bottom: Amount.Less }}
    //     >
    //       Page Not Found
    //     </Title>
    //     <Paragraph alignment={{ vertical: AlignVertical.Top }}>
    //       We couldn't find the page you're looking for.{' '}
    //     </Paragraph>
    //   </Container>
    // </Page>
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
