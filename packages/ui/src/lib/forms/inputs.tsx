import {
  CountryCode,
  CurrencyCode,
  Date,
  DateTime,
  EmailAddress,
  File,
  Image,
  LanguageCode,
  PhoneNumber,
  Primitive,
  Primitives,
  SSN,
  UUID,
} from '@srclaunch/types';
import { ReactElement } from 'react';

import { ButtonType, ErrorLabel } from '../../components';
// import { StreetAddressInput } from '../../components/forms/inputs/locale/StreetAddressInput';
import { PropertyEditor } from '../../components/editors/properties/property-editor';
import { VerificationCodeInput } from '../../components/forms/inputs/authentication/verification-code-input';
import { ToggleInput } from '../../components/forms/inputs/boolean/toggle-input';
import { EmailAddressInput } from '../../components/forms/inputs/communication/email-address-input';
import { PhoneNumberInput } from '../../components/forms/inputs/communication/phone-number-input';
// import { CurrencyAmountInput } from '../../components/forms/inputs/finance/currency/CurrencyInput';
import { DateInput } from '../../components/forms/inputs/dates/date-input';
import { DateTimeInput } from '../../components/forms/inputs/dates/date-time-input';
import { CurrencyAmountInput } from '../../components/forms/inputs/finance/currency/currency-amount-input';
// import { Checkbox } from '../../components/forms/inputs/boolean/Checkbox';
// import { ColorInput } from '../../components/forms/inputs/colors/ColorInput';
import { CountryInput } from '../../components/forms/inputs/locale/country-input';
import { CurrencyInput } from '../../components/forms/inputs/locale/currency-input';
// import { EmailAddressInput } from '../../components/forms/inputs/communication/EmailAddressInput';
// import { EmojiInput } from '../../components/forms/inputs/media/EmojiInput';
import { LanguageInput } from '../../components/forms/inputs/locale/language-input';
// import { PasswordInput } from '../../components/forms/inputs/text/PasswordInput';
// import { PhoneNumberInput } from '../../components/forms/inputs/communication/PhoneNumberInput';
// import { SearchInput } from '../../components/forms/inputs/text/SearchInput';
import { ImageInput } from '../../components/forms/inputs/media/image-input';
import { DropdownInput } from '../../components/forms/inputs/menu/dropdown-input';
// import { MarkdownEditor } from '../../components/forms/editors/MarkdownEditor';
import { NumberInput } from '../../components/forms/inputs/numbers/number-input';
import { SSNInput } from '../../components/forms/inputs/people/ssn-input';
import { LongTextInput } from '../../components/forms/inputs/text/long-text-input';
import { PasswordInput } from '../../components/forms/inputs/text/password-input';
import { TextInput } from '../../components/forms/inputs/text/text-input';
// import { Exception } from '@srclaunch/exceptions';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  AutoComplete,
  BackgroundColor,
  BackgroundImageRepeat,
  BackgroundImageSize,
  Color,
  Cursor,
  Depth,
  Fill,
  FormInputEventProps,
  Shadow,
  Size,
  TextAlign,
  TextOverflow,
  TextSize,
} from '../../types';

export function getInputElementByPrimitive({
  defaultValue,
  onValueChange,
  type,
  props,
}: FormInputEventProps<unknown> & {
  readonly defaultValue?: unknown;
  readonly props?: { readonly [key: string]: unknown };
  readonly type?: Primitives;
}): ReactElement {
  switch (type) {
    case Primitives.AlignHorizontal:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(AlignHorizontal).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.AlignVertical:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(AlignVertical).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.Amount:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Amount).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.BackgroundColor:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(BackgroundColor).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );

    case Primitives.BackgroundImageRepeat:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(BackgroundImageRepeat).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.BackgroundImageSize:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(BackgroundImageSize).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.Boolean:
      return (
        <ToggleInput
          defaultValue={defaultValue as boolean}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.ButtonType:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(ButtonType).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.CSSColor:
      // TODO: Implement ColorInput
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Color).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.CSSMeasurement:
      // TODO: Implement CSSMeasurementInput
      return (
        <NumberInput
          defaultValue={defaultValue as number}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Cursor:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Cursor).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.CountryCode:
      return (
        <CountryInput
          defaultValue={defaultValue as CountryCode}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.CurrencyAmount:
      return (
        <CurrencyAmountInput
          defaultValue={defaultValue as number}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.CurrencyCode:
      return (
        <CurrencyInput
          defaultValue={defaultValue as CurrencyCode}
          onValueChange={onValueChange}
          {...props}
        />
      );

    case Primitives.Date:
      return (
        <DateInput
          defaultValue={defaultValue as Date}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.DateTime:
      return (
        <DateTimeInput
          defaultValue={defaultValue as DateTime}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Depth:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Depth).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.EmailAddress:
      return (
        <EmailAddressInput
          defaultValue={defaultValue as EmailAddress}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Fill:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Fill).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.Image:
      return (
        <ImageInput
          // @ts-ignore
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.JSON:
      return (
        <LongTextInput
          defaultValue={defaultValue as string}
          onValueChange={onValueChange}
          {...props}
        />
        // <PropertyEditor
        //   defaultValue={defaultValue}
        //   onValueChange={onValueChange}
        //   {...props}
        // />
      );

    case Primitives.LanguageCode:
      return (
        <LanguageInput
          defaultValue={defaultValue as LanguageCode}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.LongText:
      return (
        <LongTextInput
          defaultValue={defaultValue as string}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Menu:
      return (
        <DropdownInput
          defaultValue={defaultValue as boolean | number | string}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Number:
      return (
        <NumberInput
          defaultValue={defaultValue as number}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Password:
      return (
        <PasswordInput
          defaultValue={defaultValue as string}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.PhoneNumber:
      return (
        <PhoneNumberInput
          defaultValue={defaultValue as PhoneNumber}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.SSN:
      return (
        <SSNInput
          defaultValue={defaultValue as SSN}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.Shadow:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Shadow).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.Size:
      return (
        <DropdownInput
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(Size).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.String:
      return (
        <TextInput
          defaultValue={defaultValue as string}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.TextAlign:
      return (
        <DropdownInput
          defaultValue={defaultValue as TextAlign}
          onValueChange={onValueChange}
          items={[
            ...Object.entries(TextAlign).map(([key, value]) => {
              return {
                label: key,
                value,
              };
            }),
          ]}
        />
      );
    case Primitives.UUID:
      return (
        <TextInput
          defaultValue={defaultValue as UUID}
          onValueChange={onValueChange}
          {...props}
        />
      );
    case Primitives.VerificationCode:
      return (
        <VerificationCodeInput
          autoComplete={AutoComplete.OneTimeCode}
          // @ts-ignore
          defaultValue={defaultValue as string}
          onValueChange={onValueChange}
          {...props}
        />
      );
    default:
      return (
        <ErrorLabel
          icon={{
            size: Size.Smaller,
          }}
          textSize={TextSize.Smaller}
          textOverflow={TextOverflow.Ellipsis}
        >
          {type} is not supported yet
        </ErrorLabel>
      );
  }
}
