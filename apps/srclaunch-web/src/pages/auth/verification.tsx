import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  CodeVerificationForm,
  Page,
} from '@srclaunch/ui';
import { useDispatch } from '@srclaunch/web-app-state';
import { memo, ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Verification = memo(
  ({
    loggedIn = false,
  }: // match,
  {
    readonly loggedIn: boolean;
    readonly match: { readonly params: { readonly userId: string } };
  }): ReactElement => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [error, hasError] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [errorMessage, setErrorMessage] = useState('');
    const { userId } = useParams();

    // useTitle('AppLab - User Confirmation');

    useEffect(() => {
      if (loggedIn) {
        navigate('/');
      }
    }, [dispatch, loggedIn]);

    useEffect(() => {
      // analytics.sendPageLoad('signup-confirmation');
    }, []);

    if (!userId) {
      navigate('/login');
    }

    return (
      <Page
        alignHorizontal={AlignHorizontal.Center}
        alignVertical={AlignVertical.Center}
        backgroundColor={BackgroundColor.Darkest}
        padding={100}
        // role={PageRole.Signup}
        title="Confirm your email address"
      >
        {userId && <CodeVerificationForm userId={userId} />}
      </Page>
    );
  },
);
