import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColors,
  CodeVerificationForm,
  Page,
} from '@srclaunch/ui';
import { useDispatch } from '@srclaunch/web-app';
import { memo, ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Verification = memo(
  ({
    logged_in,
    match,
  }: {
    readonly logged_in: boolean;
    readonly match: { readonly params: { readonly user_id: string } };
  }): ReactElement => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [error, hasError] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    // const [errorMessage, setErrorMessage] = useState('');
    const { userId } = useParams();

    // useTitle('AppLab - User Confirmation');

    useEffect(() => {
      if (logged_in) {
        navigate('/');
      }
    }, [dispatch, logged_in]);

    useEffect(() => {
      // analytics.sendPageLoad('signup-confirmation');
    }, []);

    if (!userId) {
      navigate('/login');
    }

    return (
      <Page
        alignment={{
          horizontal: AlignHorizontal.Center,
          vertical: AlignVertical.Center,
        }}
        background={{ color: BackgroundColors.Darkest }}
        padding={{ all: 100 }}
        // role={PageRole.Signup}
        title="Confirm your email address"
      >
        {userId && <CodeVerificationForm userId={userId} />}
      </Page>
    );
  },
);
