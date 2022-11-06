import React from 'react';

export enum RouteRole {
  ForgotPassword = 'forgot_password',
  Index = 'index',
  Login = 'login',
  PageNotFound = '404',
  Signup = 'signup',
  VerifyCode = 'verify_code',
}

export type Route = {
  readonly component?: React.ElementType;
  readonly hierarchy?: ReadonlyArray<string>;
  readonly loginRequired?: boolean;
  readonly markdown?: {
    readonly content?: string;
    readonly file?: {
      readonly name: string;
      readonly path: string;
    };
  };
  readonly path?: string;
  readonly role?: RouteRole;
};
