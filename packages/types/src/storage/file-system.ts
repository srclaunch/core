export enum FileType {
  JSON = 'json',
  TS = 'ts',
  TSX = 'tsx',
  JS = 'js',
  JSX = 'jsx',
  YAML = 'yaml',
}

export type File<T = FileType> = {
  readonly contents?: string;
  readonly extension?: string;
  readonly name: string;
  readonly path?: string;
  readonly type: T;
  readonly size?: number;
};
