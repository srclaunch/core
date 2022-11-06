import { Condition, Entity, ModelProps, Primitives } from '@srclaunch/types';

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
import { AutoComplete, FormField } from '../../types';

export function getFormFieldsFromModel({
  entity,
  model,
}: {
  readonly entity?: Entity;
  readonly model: ModelProps;
}): readonly FormField[] {
  let fields: FormField[] = [];

  for (const [fieldName, field] of Object.entries(model.fields)) {
    if (fieldName !== 'created_date' && fieldName !== 'updated_date') {
      fields = [
        // @ts-ignore
        ...fields,
        // @ts-ignore
        {
          ...field,
          name: fieldName,
          type: field.type,
          validation: field.required
            ? {
                conditions: { [Condition.IsRequired]: Boolean(field.required) },
              }
            : undefined,
        },
      ];
    }
  }

  return fields;
}

export function getInputElementByFieldType(field: FormField) {
  if (field.system) return null;

  switch (field.type) {
    case Primitives.Boolean:
      return (
        <ToggleInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.CountryCode:
      return (
        <CountryInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.CurrencyAmount:
      return (
        <CurrencyAmountInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.CurrencyCode:
      return (
        <CurrencyInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.Date:
      return (
        <DateInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.DateTime:
      return (
        <DateTimeInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.EmailAddress:
      return (
        <EmailAddressInput
          autoComplete={field.autoComplete}
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.Image:
      return (
        <ImageInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field.properties}
          {...field}
        />
      );
    // case Primitives.JSON:
    //   return (
    //     <PropertyEditor
    //       defaultValue={field.value}
    //       onChange={field.onChange}
    //       {...field}
    //     />
    //   );

    case Primitives.LanguageCode:
      return (
        <LanguageInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.LongText:
      return (
        <LongTextInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.Menu:
      return (
        <DropdownInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.Number:
      return (
        <NumberInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.Password:
      return (
        <PasswordInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.PhoneNumber:
      return (
        <PhoneNumberInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.SSN:
      return (
        <SSNInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.String:
      return (
        <TextInput
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.UUID:
      return (
        <TextInput
          defaultValue={field.value}
          hidden
          onChange={field.onChange}
          {...field}
        />
      );
    case Primitives.VerificationCode:
      return (
        <VerificationCodeInput
          autoComplete={AutoComplete.OneTimeCode}
          // @ts-ignore
          defaultValue={field.value}
          onChange={field.onChange}
          {...field}
        />
      );
    default:
      // @ts-ignore
      return <>{field.type} is not supported at this time.</>;
  }
}
