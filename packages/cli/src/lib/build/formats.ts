import { BuildFormat } from '@srclaunch/types';

export function getFormatFileSubExtension(format: BuildFormat) {
  switch (format) {
    case BuildFormat.CJS:
      return 'cjs';
    case BuildFormat.ESM:
      return 'esm';
    case BuildFormat.IIFE:
      return 'iife';
    case BuildFormat.UMD:
      return 'umd';
    default:
      return `${format}`;
  }
}

export function getViteFormatFileExtension(
  format:
    | 'amd'
    | 'cjs'
    | 'es'
    | 'iife'
    | 'system'
    | 'umd'
    | 'commonjs'
    | 'esm'
    | 'module'
    | 'systemjs',
) {
  switch (format) {
    case 'cjs':
    case 'commonjs':
      return '.cjs.js';
    case 'es':
    case 'esm':
    case 'module':
      return '.esm.js';
    case 'iife':
      return '.iife.js';
    case 'umd':
      return '.umd.js';
    default:
      return `${format}.js`;
  }
}
