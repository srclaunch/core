export interface BundleOptions {
  readonly css?: boolean;
  readonly define?: Record<string, string>;
  readonly exclude?: readonly string[];
  readonly globals?: Record<string, string>;
  readonly preserveModules?: boolean;
}
