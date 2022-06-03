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
