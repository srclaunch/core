export interface ServerOptions {
  readonly port?: number;
  readonly trustedOrigins?: {
    readonly [environment: string]: readonly string[];
  };
}
