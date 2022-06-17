export enum CloudProviders {
  AWS = 'aws',
}

export enum InfrastuctureClass {
  Smallest = 'smallest',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Largest = 'largest',
}

export type DNSConfig = {
  readonly https?: boolean;
  readonly host?: string;
  readonly port?: string;
  readonly path?: string;
};

export type InfrastructureOptions = {
  readonly class?: InfrastuctureClass;
  readonly dns?: DNSConfig;
  readonly provider?: CloudProviders;
};
