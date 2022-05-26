export enum RouteRole {
  ForgotPassword = 'forgot_password',
  Index = 'index',
  Login = 'login',
  PageNotFound = '404',
  Signup = 'signup',
  VerifyCode = 'verify_code',
}

export type Route = {
  readonly loginRequired?: boolean;
  readonly path?: string;
  readonly component: Element;
  readonly role?: RouteRole;
};
