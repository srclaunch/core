import { memo, ReactElement, useEffect, useState } from 'react';

import { getInputElementByFieldType } from '../../lib/forms/fields';
import { Amount, FormField, ValidationProps } from '../../types';
import { Container } from '../layout/container';
import { InputRow } from './layout/input-row';

export type FormFieldsProps = {
  readonly entity?: {
    readonly id?: string;
  };
  readonly fields: readonly FormField[];
  readonly onChange?: (fields: {
    readonly [name: string]: FormField;
  }) => unknown;
};

export const FormFields = memo(
  ({
    entity,
    fields,
    onChange,
    // setFieldValues,
    ...props
  }: FormFieldsProps): ReactElement => {
    const [fieldValues, setFieldValues] = useState<{
      [name: string]: FormField;
    }>();

    useEffect(() => {
      let fieldData = {};

      for (const field of fields) {
        fieldData = {
          ...fieldData,
          [field.name]: field.defaultValue,
        };
      }

      setFieldValues(fieldData);
    }, [fields]);

    useEffect(() => {
      if (onChange && fieldValues) onChange(fieldValues);
    }, [fieldValues]);

    // useEffect(() => {
    //   setFieldValues(
    //     Object.fromEntries(
    //       fields.map(field => [
    //         field.name,
    //         {
    //           ...field,
    //           value: field.value ?? field.defaultValue,
    //         },
    //       ]),
    //     ) as { [name: string]: FormField },
    //   );
    // }, [entity]);

    return (
      <Container
        className="form-fields"
        borderRadius={{ all: Amount.More }}
        {...props}
      >
        {fields?.map(field => {
          if (field.name === 'created_date' || field.name === 'updated_date')
            return null;

          return (
            <InputRow key={field.name}>
              {getInputElementByFieldType({
                ...field,
                onValueChange: ({
                  validation,
                  value,
                }: {
                  validation?: ValidationProps;
                  value?: any;
                }) => {
                  setFieldValues({
                    ...fieldValues,
                    [field.name]: { ...field, validation, value },
                  });
                },
              })}
            </InputRow>
          );
        })}
      </Container>
    );
  },
);
