import { CountryCode } from '../../i18n/locale/country';
import { LanguageCode } from '../../i18n/language/index';
import { CurrencyCode } from '../../i18n/currency';
import {
  Date,
  DateTime,
  EmailAddress,
  Image,
  JSONObject,
  LongText,
  MenuItem,
  Password,
  PhoneNumber,
  Primitive,
  Primitives,
  SSN,
  UUID,
  VerificationCode,
} from '../primitive';
import { Model } from './index.js';

export type MenuField = {
  label: string;
  value: string | number | boolean;
};

export type ModelField = {
  autoIncrement?: boolean;
  description?: string;
  id?: string; // This won't be optional when entities are stored in a database instead of a file.
  label: string;
  name?: string;
  menu?: MenuField[];
  model?: Model['name'];
  primaryKey?: boolean;
  properties?: Record<string, unknown>;
  required?: boolean;
  // rules?: RoleRule[];
  system?: boolean;
  unique?: boolean;
  // validation?: ValidationRule;
} & (
  | {
      defaultValue?: boolean;
      type: Primitives.Boolean;
    }
  | {
      defaultValue?: CountryCode;
      type: Primitives.CountryCode;
    }
  | {
      defaultValue?: number;
      type: Primitives.CurrencyAmount;
    }
  | {
      defaultValue?: CurrencyCode;
      type: Primitives.CurrencyCode;
    }
  | {
      defaultValue?: Date;
      type: Primitives.Date;
    }
  | {
      defaultValue?: DateTime;
      type: Primitives.DateTime;
    }
  | {
      defaultValue?: EmailAddress;
      type: Primitives.EmailAddress;
    }
  | {
      defaultValue?: Image[];
      type: Primitives.Image;
    }
  | {
      defaultValue?: JSONObject;
      type: Primitives.JSON;
    }
  | {
      defaultValue?: LanguageCode;
      type: Primitives.LanguageCode;
    }
  | {
      defaultValue?: LongText;
      type: Primitives.LongText;
    }
  | {
      defaultValue?: MenuField['value'];
      menu?: MenuField[];
      type: Primitives.Menu;
    }
  | {
      defaultValue?: number;
      type: Primitives.Number;
    }
  | {
      defaultValue?: Password;
      type: Primitives.Password;
    }
  | {
      defaultValue?: PhoneNumber;
      type: Primitives.PhoneNumber;
    }
  | {
      defaultValue?: string;
      type: Primitives.String;
    }
  | {
      defaultValue?: SSN;
      type: Primitives.SSN;
    }
  | {
      defaultValue?: UUID;
      type: Primitives.UUID;
    }
  | {
      defaultValue?: VerificationCode;
      type: Primitives.VerificationCode;
    }
);
