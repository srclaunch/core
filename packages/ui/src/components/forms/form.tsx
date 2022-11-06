// import { Model } from '@srclaunch/types';
import { Model } from '@srclaunch/types';
import { ValidationProblem } from '@srclaunch/validation';
import {
  FormEvent,
  memo,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Amount, FormEventProps, FormField } from '../../types';
// import { getFormFieldsFromModel } from '../../lib/forms/fields';
import { Container, ContainerProps } from '../layout/container';
import { Button, ButtonProps, ButtonType } from './buttons/button';
import { FormActions } from './form-actions';
import { FormFields } from './form-fields';

export const Form = memo(
  ({
    className = '',
    entity,
    onSubmitted,
    fields,
    inProgress = false,
    // model,
    name,
    padding = Amount.None,
    submitButton,
    ...props
  }: ContainerProps<
    FormEventProps & {
      readonly cancelButton?: {
        readonly label: string;
      };
      readonly entity?:
        | ({ readonly [f: string]: unknown } & { readonly id?: string })
        | undefined;
      readonly fields?: readonly FormField[];
      readonly inProgress?: boolean;
      readonly model?: Model;
      readonly name: string;
      readonly submitButton?:
        | (ButtonProps & {
            readonly label: string;
          })
        | null;
    }
  >): ReactElement => {
    const [fieldValues, setFieldValues] = useState<{
      [name: string]: FormField;
    }>({});
    const [validationProblems, setValidationProblems] =
      useState<ValidationProblem[]>();
    const [isValidated, setValidated] = useState(false);
    const [requiresValidation, setRequiresValidation] = useState(false);
    const fieldValuesReference = useRef(fieldValues);
    const requiresValidationReference = useRef(requiresValidation);
    const validationProblemsReference = useRef(validationProblems);
    const isValidatedReference = useRef(isValidated);

    const submitButtonProps = {
      label: 'Submit',
      // size: Size.Large,
      type: ButtonType.Primary,
      ...submitButton,
    };

    const checkValidation = () => {
      let problems: ValidationProblem[] = [];
      let validationRequired = false;

      for (const field of Object.entries(fieldValues)) {
        if (field[1].validation) {
          validationRequired = true;
        }

        if (field[1].validation?.problems) {
          problems = [...problems, ...(field[1].validation?.problems ?? [])];
        }
      }

      requiresValidationReference.current = validationRequired;
      setRequiresValidation(validationRequired);
      validationProblemsReference.current = problems;
      setValidationProblems(problems);

      const validated =
        Object.values(fieldValues).filter(
          field => field.validation && !field.validation?.validated,
        ).length === 0;

      isValidatedReference.current = validated;
      setValidated(validated);
    };

    useEffect(() => {
      checkValidation();
    }, [fieldValues]);

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
      if (requiresValidationReference.current) {
        if (onSubmitted)
          onSubmitted({
            fields: fieldValuesReference.current,
            validation: {
              problems: validationProblemsReference.current,
              validated: isValidatedReference.current,
            },
          });
      } else {
        if (onSubmitted)
          onSubmitted({
            fields: fieldValuesReference.current,
          });
      }

      event.preventDefault();
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
              fieldValuesReference.current = ff;
              setFieldValues(ff);
            }}
          />
        )}

        {submitButton && (
          <FormActions>
            <Button
              form={name}
              state={{
                disabled: (requiresValidation && !isValidated) || inProgress,
              }}
              {...submitButtonProps}
            >
              {submitButton.label}
            </Button>
          </FormActions>
        )}
      </Container>
    );
  },
);
