import { Theme } from '../ui/theme';

export type Application = {
  readonly id: string;
  readonly name: string;
};

export type MobileApplication = Application & {
  readonly platforms: readonly ['Android' | 'iOS'];
};

export type DesktopApplication = Application & {
  readonly platforms: readonly ['Windows' | 'Mac' | 'Linux'];
};

export type WebApplication = {
  readonly pwa?: boolean;
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
