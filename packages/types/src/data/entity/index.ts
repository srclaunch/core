export type Entity = Record<string, boolean | number | string> & {
  readonly createdDate: Date;
  readonly id: string;
  readonly updatedDate: Date;
};
