import { createSlice } from '@reduxjs/toolkit';
import { Exception } from '@srclaunch/exceptions';
import { ISO8601String } from '@srclaunch/types';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { DateTime } from 'luxon';

import { AppThunk } from '../../../../../types';

type VerificationCodeResendState = {
  readonly error?: Exception | Error;
  readonly lastUpdated?: ISO8601String;
  readonly inProgress: boolean;
  readonly success?: boolean;
};

const initialState: VerificationCodeResendState = {
  error: undefined,
  inProgress: false,
  lastUpdated: undefined,
  success: undefined,
};

const slice = createSlice({
  initialState,
  name: 'resend',
  reducers: {
    setVerificationCodeResendFailure: (state, action) => {
      state.lastUpdated = DateTime.now().toISO();
      state.inProgress = false;
      state.success = false;
      state.error = action.payload;
    },
    setVerificationCodeResendInProgress: (state, action) => {
      state.lastUpdated = DateTime.now().toISO();
      state.error = undefined;
      state.success = undefined;
      state.inProgress = action.payload;
    },
    setVerificationCodeResendSuccess: state => {
      state.lastUpdated = DateTime.now().toISO();
      state.error = undefined;
      state.inProgress = false;
      state.success = true;
    },
  },
});

export default slice.reducer;

const {
  setVerificationCodeResendFailure,
  setVerificationCodeResendInProgress,
  setVerificationCodeResendSuccess,
} = slice.actions;

export const resendVerificationCode =
  ({ userId }: { readonly userId: string }): AppThunk =>
  async (dispatch, getState) => {
    try {
      dispatch(setVerificationCodeResendInProgress(true));

      const config = getState().app.config;
      const poolData = {
        ClientId: config.aws.cognito.userPoolClientId,
        UserPoolId: config.aws.cognito.userPoolId,
      };
      const userPool = new CognitoUserPool(poolData);
      const userData = {
        Pool: userPool,
        Username: userId,
      };
      const cognitoUser = new CognitoUser(userData);

      cognitoUser.resendConfirmationCode((err, result) => {
        if (err) {
          const exception = new Exception(
            'Failure resending verification code',
            {
              cause: err,
            },
          );

          dispatch(setVerificationCodeResendFailure(exception.toJSON()));

          return;
        }

        console.log('resendConfirmationCode result', result);

        dispatch(setVerificationCodeResendSuccess());
      });
    } catch (error: any) {
      const exception = new Exception('Failure resending verification code', {
        cause: error,
      });

      dispatch(setVerificationCodeResendFailure(exception.toJSON()));
    }
  };
