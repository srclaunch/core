import { CurrencyCode } from '../../i18n/currency';
import { LanguageCode } from '../../i18n/language/index';
import { CountryCode } from '../../i18n/locale/country';
import {
  Date,
  DateTime,
  EmailAddress,
  Image,
  JSONObject,
  LongText,
  Password,
  PhoneNumber,
  Primitives,
  SSN,
  UUID,
  VerificationCode,
} from '../primitive';
import { Model } from './index.js';

export type MenuField = {
  readonly label: string;
  readonly value: boolean | number | string;
};

export type ModelField = {
  readonly autoIncrement?: boolean;
  readonly description?: string;
  readonly id?: string; // This won't be optional when entities are stored in a database instead of a file.
  readonly label: string;
  readonly menu?: readonly MenuField[];
  readonly model?: Model['name'];
  readonly name?: string;
  readonly primaryKey?: boolean;
  readonly properties?: Record<string, unknown>;
  readonly required?: boolean;
  // rules?: RoleRule[];
  readonly system?: boolean;
  readonly unique?: boolean;
  // validation?: ValidationRule;
} & (
  | {
      readonly defaultValue?: boolean;
      readonly type: Primitives.Boolean;
    }
  | {
      readonly defaultValue?: CountryCode;
      readonly type: Primitives.CountryCode;
    }
  | {
      readonly defaultValue?: CurrencyCode;
      readonly type: Primitives.CurrencyCode;
    }
  | {
      readonly defaultValue?: Date;
      readonly type: Primitives.Date;
    }
  | {
      readonly defaultValue?: DateTime;
      readonly type: Primitives.DateTime;
    }
  | {
      readonly defaultValue?: EmailAddress;
      readonly type: Primitives.EmailAddress;
    }
  | {
      readonly defaultValue?: JSONObject;
      readonly type: Primitives.JSON;
    }
  | {
      readonly defaultValue?: LanguageCode;
      readonly type: Primitives.LanguageCode;
    }
  | {
      readonly defaultValue?: LongText;
      readonly type: Primitives.LongText;
    }
  | {
      readonly defaultValue?: MenuField['value'];
      readonly menu?: readonly MenuField[];
      readonly type: Primitives.Menu;
    }
  | {
      readonly defaultValue?: number;
      readonly type: Primitives.CurrencyAmount;
    }
  | {
      readonly defaultValue?: number;
      readonly type: Primitives.Number;
    }
  | {
      readonly defaultValue?: Password;
      readonly type: Primitives.Password;
    }
  | {
      readonly defaultValue?: PhoneNumber;
      readonly type: Primitives.PhoneNumber;
    }
  | {
      readonly defaultValue?: readonly Image[];
      readonly type: Primitives.Image;
    }
  | {
      readonly defaultValue?: SSN;
      readonly type: Primitives.SSN;
    }
  | {
      readonly defaultValue?: string;
      readonly type: Primitives.String;
    }
  | {
      readonly defaultValue?: UUID;
      readonly type: Primitives.UUID;
    }
  | {
      readonly defaultValue?: VerificationCode;
      readonly type: Primitives.VerificationCode;
    }
);
