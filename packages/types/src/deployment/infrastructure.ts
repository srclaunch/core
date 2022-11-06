export enum CloudProviders {
  AWS = 'aws',
}

export enum InfrastuctureClass {
  Large = 'large',
  Largest = 'largest',
  Medium = 'medium',
  Small = 'small',
  Smallest = 'smallest',
}

export type DNSOptions = {
  readonly host?: string;
  readonly https?: boolean;
  readonly path?: string;
  readonly port?: number;
};

export type InfrastructureOptions = {
  readonly class?: InfrastuctureClass;
  readonly dns?: DNSOptions;
  readonly provider?: CloudProviders;
};
