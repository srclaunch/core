import { Theme } from '../ui/theme';

export type WebApplicationRunOptions = {
  readonly external?: readonly string[];
  readonly optimize?: {
    readonly exclude?: readonly string[];
    readonly include?: readonly string[];
  };
  readonly ssr?: boolean;
};

export type WebApplicationConfiguration = {
  readonly aws?: {
    readonly cognito?: {
      readonly identityPoolId?: string;
      readonly userPoolClientId?: string;
      readonly userPoolId?: string;
    };
    readonly region?: string;
  };
  readonly ui?: {
    readonly themes?: {
      readonly custom?: readonly Theme[];
      readonly default?: Theme['id'];
    };
  };
};
