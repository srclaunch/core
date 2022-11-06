export type AuthenticationChallengeDetails = {
  name: string;
  parameters: Record<string, unknown>;
};

export type AuthenticationDeviceDetails = {
  key?: string;
  groupKey?: string;
};

export type AuthenticationTokens = {
  accessToken: string;
  expiration: string;
  idToken: string;
  refreshToken: string;
};
