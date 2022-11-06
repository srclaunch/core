import { Amount, Size } from '../../types';

export function getDropdownMinHeight(
  count: number,
  padding?: number | string,
): number | string {
  switch (count) {
    case 0:
      return 0;
    case 1:
      return `calc((${Size.Default}) + (${padding ?? Amount.Less} * 2) + 2px)`;
    case 2:
      return `calc((${Size.Default} * 2) + (${
        padding ?? Amount.Less
      } * 2)  + 2px)`;
    case 3:
      return `calc((${Size.Default} * 3) + (${
        padding ?? Amount.Less
      } * 2)  + 2px)`;
    default:
      return `calc((${Size.Default} * 3.5) + (${
        padding ?? Amount.Less
      } * 2)  + 2px)`;
  }
}
