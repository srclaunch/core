import deepEqual from 'deep-equal';
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
    const [fieldData, setFieldData] = useState<{
      [name: string]: FormField;
    }>(
      Object.entries(fields).reduce((accumulator, field) => {
        accumulator[field[1].name] = field[1];

        return accumulator;
      }, {} as { [name: string]: FormField }),
    );

    useEffect(() => {
      let _data = {};
      for (const field of fields) {
        _data = {
          ..._data,
          [field.name]: field,
        };
      }

      if (!deepEqual(fieldData, _data)) {
        setFieldData(_data);
      }
    }, [fields]);

    useEffect(() => {
      onChange?.(fieldData);
    }, [fieldData]);

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
                  console.log('onValueChange', field.name, value, validation);
                  setFieldData({
                    ...fieldData,
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
