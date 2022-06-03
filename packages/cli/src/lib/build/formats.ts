import { BuildFormat } from '@srclaunch/types';

export function getFormatFileExtension(format: BuildFormat) {
  switch (format) {
    case BuildFormat.CJS:
      return '.cjs.js';
    case BuildFormat.ESM:
      return '.esm.js';
    case BuildFormat.IIFE:
      return '.iife.js';
    case BuildFormat.UMD:
      return '.umd.js';
    default:
      return `${format}.js`;
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
