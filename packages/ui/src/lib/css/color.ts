export function getCSSColor(value?: string, opacity?: number) {
  if (!value) return value;

  if (value === 'transparent') {
    return 'transparent';
  }

  if (value.toString().includes('var(')) {
    if (opacity) {
      return `rgba(${value}, ${opacity}%)`;
    }

    return `rgb(${value})`;
  }

  return value;
}
