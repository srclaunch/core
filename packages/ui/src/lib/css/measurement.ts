import { CSSMeasurement } from '../../types';

export function getCSSMeasurement(
  value?: number | string,
): CSSMeasurement | undefined {
  if (typeof value === 'string' && value.includes('var(')) {
    return value;
  }

  if (typeof value === 'string' && value.includes('%')) {
    return value;
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  return value;
}
