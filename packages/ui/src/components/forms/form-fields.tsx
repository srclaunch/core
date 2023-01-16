import { memo, ReactElement } from 'react';

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
                  const fieldData = Object.entries(fields).reduce(
                    (accumulator, f) => {
                      accumulator[f[1].name] =
                        f[1].name === field.name
                          ? {
                              ...f[1],
                              validation,
                              value,
                            }
                          : {
                              ...f[1],
                            };

                      return accumulator;
                    },
                    {} as { [name: string]: FormField },
                  );
                  onChange?.(fieldData);
                },
              })}
            </InputRow>
          );
        })}
      </Container>
    );
  },
);
