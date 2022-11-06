import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  ForgotPasswordForm,
  Page,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';

// import { PageRole } from '@srclaunch/types';
// import { push } from 'connected-react-router';
// import { useEffect } from 'react';
// import { connect } from 'react-redux';

export const ForgotPassword = memo((): ReactElement => {
  // useEffect(() => {
  //   // analytics.sendPageLoad('login');
  // }, []);

  return (
    <Page
      alignHorizontal={AlignHorizontal.Center}
      alignVertical={AlignVertical.Center}
      backgroundColor={BackgroundColor.Darkest}
      padding={100}
      title="Login"
    >
      <ForgotPasswordForm />
    </Page>
  );
});
