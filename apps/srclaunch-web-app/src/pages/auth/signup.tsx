// import { useTitle } from '@srclaunch/react-hooks';
import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColors,
  Page,
  SignupForm,
} from '@srclaunch/ui';
import { memo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = memo((): ReactElement => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // useTitle('Applab - Sign up');

  // useEffect(() => {
  //   if (logged_in) {
  //     dispatch(push('/dashboard'));
  //   }
  // }, [dispatch, logged_in]);

  // useEffect(() => {
  //   analytics.sendPageLoad();
  // }, []);

  return (
    <Page
      alignment={{
        horizontal: AlignHorizontal.Center,
        vertical: AlignVertical.Center,
      }}
      background={{ color: BackgroundColors.Darkest }}
      padding={{ all: 100 }}
      // role={PageRole.Signup}
      title="Sign up"
    >
      <SignupForm
        onSignupSuccess={({ userId }) => navigate(`/verify/${userId}`)}
      />
    </Page>
  );
});
