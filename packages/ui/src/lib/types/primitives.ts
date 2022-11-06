import { ComponentPropertyDefinition, Primitives } from '@srclaunch/types';

import { ButtonType } from '../../components';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BackgroundImageRepeat,
  BackgroundImageSize,
  CSSColor,
  CSSMeasurement,
  Cursor,
  Fill,
  Size,
  TextAlign,
} from '../../types';

export function getPrimitiveFromTypescriptType(
  type?: ComponentPropertyDefinition['type'],
): Primitives | string | undefined {
  if (!type || (!type.raw && !type.name)) {
    return;
  }

  switch (type?.raw ?? type?.name) {
    case 'BackgroundColor':
      return Primitives.BackgroundColor;
    case 'ButtonType':
      return Primitives.ButtonType;
    case 'CSSColor':
      return Primitives.String;
    case 'CSSMeasurement':
      return Primitives.String;
    case 'Cursor':
      return Primitives.Cursor;
    case 'BorderRadius':
      return Primitives.Amount;
    case 'Margin':
      return Primitives.Amount;
    case 'Orientation':
      return Primitives.Orientation;
    case 'Padding':
      return Primitives.Amount;
    case 'Shadow':
      return Primitives.Shadow;
    case 'Size':
      return Primitives.Size;
    case 'TextAlign':
      return Primitives.TextAlign;
    case 'boolean':
      return Primitives.Boolean;
    case 'string':
      return Primitives.String;
  }

  return type?.raw ?? type?.name;
}

export function getTypeValue(
  enumObject?: { readonly [name: string]: number | string },
  value?: unknown,
) {
  if (!value) {
    return;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string' && value.includes('.')) {
    const enumKey = (value as string).split('.')[1] as string;

    return enumObject?.[enumKey];
  }

  return enumObject?.[value as string] ?? value;
}

export function getValueFromPrimitive({
  value,
  primitive,
}: {
  readonly primitive?: Primitives;
  readonly value?: unknown;
}): unknown {
  switch (primitive) {
    case Primitives.AlignHorizontal:
      return getTypeValue(AlignHorizontal, value);
    case Primitives.AlignVertical:
      return getTypeValue(AlignVertical, value);
    case Primitives.Amount:
      return getTypeValue(Amount, value);
    case Primitives.BackgroundColor:
      return getTypeValue(BackgroundColor, value);
    case Primitives.BackgroundImageRepeat:
      return getTypeValue(BackgroundImageRepeat, value);
    case Primitives.BackgroundImageSize:
      return getTypeValue(BackgroundImageSize, value);
    case Primitives.ButtonType:
      return getTypeValue(ButtonType, value);
    case Primitives.Cursor:
      return getTypeValue(Cursor, value);
    case Primitives.Fill:
      return getTypeValue(Fill, value);
    case Primitives.Size:
      return getTypeValue(Size, value);
    case Primitives.TextAlign:
      return getTypeValue(TextAlign, value);
  }

  return;
}
