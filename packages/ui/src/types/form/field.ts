import {
  CountryCode,
  CurrencyAmount,
  CurrencyCode,
  Date,
  DateTime,
  EmailAddress,
  Image,
  JSONObject,
  LanguageCode,
  LongText,
  Password,
  PhoneNumber,
  Primitive,
  Primitives,
  SSN,
  UUID,
  VerificationCode,
} from '@srclaunch/types';

import { ImageInputProps } from '../../components/forms/inputs/media/image-input';
import { FormInputEventProps } from '../event';
import { ValidationProps } from '../validation';
import { AutoComplete } from './input/auto-complete';

export type CommonFormFieldProps = {
  readonly hidden?: boolean;
  readonly label?: string;
  readonly name: string;
  readonly properties?: Record<string, unknown>;
  readonly validation?: ValidationProps;
};

export type FormFieldValueProps<
  T extends Primitive | readonly Primitive[],
  P = Record<string, unknown>,
> = FormInputEventProps<T> &
  P & {
    readonly defaultValue?: T;
    readonly system?: boolean;
    readonly value?: T;
  };

export type FormField = CommonFormFieldProps &
  (
    | FormFieldValueProps<
        // @ts-ignore
        readonly (File | Image)[],
        {
          readonly properties: ImageInputProps;
          readonly type: Primitives.Image;
        }
      >
    | FormFieldValueProps<
        CountryCode,
        {
          readonly type: Primitives.CountryCode;
        }
      >
    | FormFieldValueProps<
        CurrencyAmount,
        {
          readonly type: Primitives.CurrencyAmount;
        }
      >
    | FormFieldValueProps<
        CurrencyCode,
        {
          readonly type: Primitives.CurrencyCode;
        }
      >
    | FormFieldValueProps<
        EmailAddress,
        {
          readonly autoComplete?:
            | AutoComplete.EmailAddress
            | AutoComplete.Username;
          readonly type: Primitives.EmailAddress;
        }
      >
    | FormFieldValueProps<
        LanguageCode,
        {
          readonly type: Primitives.LanguageCode;
        }
      >
    | FormFieldValueProps<
        LongText,
        {
          readonly type: Primitives.LongText;
        }
      >
    | FormFieldValueProps<
        number,
        {
          readonly type: Primitives.Number;
        }
      >
    | FormFieldValueProps<
        Password,
        {
          readonly autoComplete?:
            | AutoComplete.CurrentPassword
            | AutoComplete.NewPassword;
          readonly type: Primitives.Password;
        }
      >
    | FormFieldValueProps<
        PhoneNumber,
        {
          readonly autoComplete?: AutoComplete.PhoneNumber;
          readonly type: Primitives.PhoneNumber;
        }
      >
    | FormFieldValueProps<
        SSN,
        {
          readonly type: Primitives.SSN;
        }
      >
    | FormFieldValueProps<
        string,
        {
          readonly autoComplete?:
            | AutoComplete.FamilyName
            | AutoComplete.GivenName;
          readonly type: Primitives.String;
        }
      >
    | FormFieldValueProps<
        UUID,
        {
          readonly type: Primitives.UUID;
        }
      >
    | FormFieldValueProps<
        VerificationCode,
        {
          readonly autoComplete?: AutoComplete.OneTimeCode;
          readonly type: Primitives.VerificationCode;
        }
      >
    | FormFieldValueProps<boolean, { readonly type: Primitives.Boolean }>
    | FormFieldValueProps<Date, { readonly type: Primitives.Date }>
    | FormFieldValueProps<DateTime, { readonly type: Primitives.DateTime }>
    | FormFieldValueProps<JSONObject, { readonly type: Primitives.JSON }>
    | FormFieldValueProps<Primitive, { readonly type: Primitives.Menu }>
  );
