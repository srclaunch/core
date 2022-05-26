export type WebApplicationRunOptions = {
  external?: string[];
  optimize?: {
    exclude?: string[];
    include?: string[];
  };
  ssr?: boolean;
};
