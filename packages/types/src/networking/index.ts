export interface Network {
  readonly type: 'HTTP' | 'Socket';
}

export * from './http';
