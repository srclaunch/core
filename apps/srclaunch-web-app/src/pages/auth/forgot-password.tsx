import {

  AlignHorizontal,
  AlignVertical,
  BackgroundColors,
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
      alignment={{
        horizontal: AlignHorizontal.Center,
        vertical: AlignVertical.Center
      }}
      
      background={{ color: BackgroundColors.Darkest }}
      padding={{ all: 100 }}
      title="Login"
    >
      <ForgotPasswordForm />
    </Page>
  );
});
