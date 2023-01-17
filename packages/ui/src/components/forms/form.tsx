// import { Model } from '@srclaunch/types';
import { Model } from '@srclaunch/types';
import { ValidationProblem } from '@srclaunch/validation';
import deepEqual from 'deep-equal';
import { memo, ReactElement, useEffect, useState } from 'react';

import { Amount, Fill, FormEventProps, FormField } from '../../types';
// import { getFormFieldsFromModel } from '../../lib/forms/fields';
import { Container, ContainerProps } from '../layout/container';
import { Button, ButtonType } from './buttons/button';
import { FormActions } from './form-actions';
import { FormFields } from './form-fields';

export const Form = memo(
  ({
    cancelButtonLabel,
    className = '',
    entity,
    onCancel,
    onChange,
    onSubmit,
    fields,
    inProgress = false,
    // model,
    name,
    padding = Amount.None,
    showCancelButton = true,
    showSubmitButton = true,
    submitButtonLabel,
    ...props
  }: ContainerProps<
    FormEventProps & {
      readonly cancelButtonLabel?: string;
      readonly entity?:
        | ({ readonly [f: string]: unknown } & { readonly id?: string })
        | undefined;
      readonly fields?: readonly FormField[];
      readonly inProgress?: boolean;
      readonly model?: Model;
      readonly name: string;
      readonly showCancelButton?: boolean;
      readonly showSubmitButton?: boolean;
      readonly submitButtonLabel?: string;
    }
  >): ReactElement => {
    const [formData, setFormData] = useState<{
      [name: string]: FormField;
    }>(
      Object.entries(fields ?? {}).reduce((accumulator, field) => {
        accumulator[field[1].name] = field[1].defaultValue;

        return accumulator;
      }, {} as { [name: string]: any }),
    );

    const [fieldData, setFieldData] = useState<{
      [name: string]: FormField;
    }>();
    const [problems, setProblems] = useState<ValidationProblem[]>([]);

    useEffect(() => {
      if (fields) {
        setFieldData(
          Object.entries(fields).reduce((accumulator, field) => {
            accumulator[field[1].name] = field[1];

            return accumulator;
          }, {} as { [name: string]: FormField }),
        );
      }
    }, [fields]);
    // const [isValidated, setValidated] = useState(false);
    // const [requiresValidation, setRequiresValidation] = useState(false);
    // const fieldValuesReference = useRef(fieldValues);
    // const requiresValidationReference = useRef(requiresValidation);
    // const validationProblemsReference = useRef(validationProblems);
    // const isValidatedReference = useRef(isValidated);

    // const checkValidation = () => {

    //   let validationRequired = false;

    //   if (!fields) return;

    //   for (const field of fields) {
    //     if (field.validation) {
    //       validationRequired = true;
    //     }

    //   }

    //   // requiresValidationReference.current = validationRequired;
    //   setRequiresValidation(validationRequired);
    //   // validationProblemsReference.current = problems;
    //   setValidationProblems(problems);

    //   // const validated =
    //   //   Object.values(fieldValues).filter(
    //   //     field => field.validation && !field.validation?.validated,
    //   //   ).length === 0;

    //   // isValidatedReference.current = validated;
    //   // setValidated(validated);

    //   if (onChange) {
    //     const data = Object.fromEntries(
    //       Object.entries(fieldValues).map(field => [field[0], field[1].value]),
    //     );

    //     onChange({
    //       data,
    //       fields: fieldValues,
    //       validation: {
    //         problems,
    //         validated,
    //       },
    //     });
    //   }
    // };

    const submitForm = () => {
      if (onSubmit && fieldData) {
        onSubmit({
          data: formData,
          fields: fieldData,
          validation: {
            problems,
            validated: problems?.length === 0,
          },
        });
      }
    };

    return (
      <Container
        as="form"
        className={`${className} form`}
        onSubmit={submitForm}
        id={name}
        name={name}
        padding={padding}
        {...props}
      >
        {fields && (
          <FormFields
            entity={entity}
            fields={fields}
            onChange={ff => {
              let problemos: ValidationProblem[] = [];

              for (const field of Object.entries(ff)) {
                if (field[1].validation?.problems) {
                  problemos = [
                    ...problemos,
                    ...(field[1].validation?.problems ?? []),
                  ];
                }
              }

              if (onChange) {
                let data = {};
                for (const field of Object.entries(ff)) {
                  data = { ...data, [field[0]]: field[1].value };
                }

                if (!deepEqual(ff, fieldData)) {
                  onChange({
                    data,
                    fields: { ...fieldData, ...ff },
                    validation: {
                      problems: problemos,
                      validated: problemos?.length === 0,
                    },
                  });

                  setFieldData(ff);
                }
              }
            }}
          />
        )}

        <FormActions>
          {showCancelButton && (
            <Button
              fill={Fill.None}
              form={name}
              onClick={e => {
                e.preventDefault();
                if (onCancel) onCancel();
              }}
              type={ButtonType.Secondary}
            >
              {cancelButtonLabel ?? 'Cancel'}
            </Button>
          )}

          {showSubmitButton && (
            <Button
              fill={Fill.None}
              form={name}
              marginLeft={Amount.More}
              onClick={e => {
                e.preventDefault();
                submitForm();
              }}
              state={{
                disabled: inProgress,
              }}
              type={ButtonType.Primary}
            >
              {submitButtonLabel ?? 'Submit'}
            </Button>
          )}
        </FormActions>
      </Container>
    );
  },
);
