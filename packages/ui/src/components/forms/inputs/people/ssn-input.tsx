import { Condition, SSN } from '@srclaunch/types';
import {
  // getValidationProblemLabel,
  ValidationProblem,
} from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TextStyles } from '../../../../styles/typography';
import {
  AlignHorizontal,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  DepthShadow,
  Orientation,
  Sizes,
  TextAlign,
  TextColors,
  TextSize,
  // TextWeight,
} from '../../../../types';
import { Container } from '../../../layout/container';
import { ProgressSpinner } from '../../../progress/progress-spinner';
import { Label } from '../../../typography/label';
import { ErrorLabel } from '../../../typography/labels/errors/error-label';
import { InputLabel } from '../../../typography/labels/forms/input-label';
import {
  InputContainer,
  InputContainerProps as InputContainerProperties,
} from '../shared/input-container';

export type SSNInputProps = InputContainerProperties<SSN>;

export const SSNInput = memo(
  ({
    // as,
    background = {},
    border = {},
    className = '',
    cursor = Cursor.Text,
    defaultValue,
    events = {},
    icon,
    label,
    name,
    // placeholder = '',
    shadow = DepthShadow.Low,
    states = {},
    // textSize = TextSize.Default,
    textColor = TextColors.InputControl,
    // textWeight = TextWeight.Default,
    validation = { conditions: { [Condition.IsSSN]: true } },
    ...properties
  }: SSNInputProps): ReactElement => {
    const [value, setValue] = useState<(number | undefined)[]>(
      defaultValue
        ? [
            Number.parseInt(defaultValue?.toString().slice(0, 3) || '000'),
            Number.parseInt(defaultValue?.toString().slice(3, 5) || '00'),
            Number.parseInt(defaultValue?.toString().slice(5) || '0000'),
          ]
        : [],
    );
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);

    const firstInputReference = useRef<HTMLInputElement>(null);
    const secondInputReference = useRef<HTMLInputElement>(null);
    const thirdInputReference = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setValueChanged(true);

      if (valueChanged) {
        if (validation && validation.conditions) {
          // const probs = validate(
          //   value,
          //   validation.conditions,
          // ) as ValidationProblem[];
          const probs: ValidationProblem[] = [];
          setProblems(probs);

          if (events.input?.onValueChange && value)
            events.input.onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value: Number.parseInt(value.join('')),
            });
        } else {
          if (events.input?.onValueChange && value)
            events.input.onValueChange({
              value: Number.parseInt(value.join('')),
            });
        }
      }
    }, [value]);

    return (
      <>
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
          }}
        >
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 ? (
            <ErrorLabel alignment={{ horizontal: AlignHorizontal.Right }}>
              {problems[0]?.message.short}
            </ErrorLabel>
          ) : null}
        </Container>

        <InputContainer
          background={{ color: BackgroundColors.InputControl, ...background }}
          border={{
            all: {
              color: BorderColors.InputControl,
              style: BorderStyle.Solid,
              width: 1,
            },
            ...border,
          }}
          cursor={cursor}
          className={`${className} ssn-input`}
          events={{
            mouse: {
              onClick: () => {
                if (!focused && firstInputReference.current) {
                  firstInputReference.current.focus();
                }
              },
            },
          }}
          padding={{
            left: Amount.Least,
            right: Amount.Least,
          }}
          shadow={shadow}
          states={{
            state: {
              error: problems,
              focused,
            },
          }}
          {...properties}
        >
          {icon && <>{icon}</>}

          <Input
            // defaultValue={defaultValue}
            hidden={!states.state?.visible}
            max={999}
            min={100}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={e => {
              setValueChanged(true);
              setValue([Number.parseInt(e.target.value), value[1], value[2]]);

              if (e.target.value.length === 3 && secondInputReference.current) {
                secondInputReference.current?.focus();
              }
            }}
            onFocus={() => setFocused(true)}
            placeholder="123"
            onKeyPress={e => {
              if (value.length === 3) {
                e.preventDefault();
              }

              return;
            }}
            ref={firstInputReference}
            textAlign={TextAlign.Center}
            textColor={textColor}
            type="number"
            // value={value[0]}
          />

          <Label textSize={TextSize.Larger}>-</Label>

          <Input
            // defaultValue={defaultValue}
            hidden={!states.state?.visible}
            max={99}
            min={1}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={e => {
              setValueChanged(true);
              setValue([value[0], Number.parseInt(e.target.value), value[2]]);

              if (e.target.value.length === 2) {
                thirdInputReference.current?.focus();
              }
            }}
            onFocus={() => setFocused(true)}
            placeholder="45"
            onKeyPress={e => {
              if (value.length === 2) {
                e.preventDefault();
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Backspace' && value.length === 0) {
                firstInputReference.current?.focus();
              }
            }}
            ref={secondInputReference}
            textAlign={TextAlign.Center}
            textColor={textColor}
            type="number"
            // value={value[1]}
          />

          <Label textSize={TextSize.Larger}>-</Label>

          <Input
            // defaultValue={defaultValue}
            hidden={!states.state?.visible}
            max={9999}
            min={1000}
            name={name}
            onBlur={() => setFocused(false)}
            onChange={e => {
              setValueChanged(true);
              setValue([value[0], value[1], Number.parseInt(e.target.value)]);
            }}
            onFocus={() => setFocused(true)}
            placeholder="6789"
            onKeyPress={e => {
              if (value.length === 4) {
                e.preventDefault();
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Backspace' && value.length === 0) {
                secondInputReference.current?.focus();
              }
            }}
            ref={thirdInputReference}
            textAlign={TextAlign.Center}
            textColor={textColor}
            type="number"
            // value={value[2]}
          />

          {states.state?.loading && (
            <ProgressSpinner
              size={{
                height: Sizes.Small,
                width: Sizes.Small,
              }}
            />
          )}
        </InputContainer>
      </>
    );
  },
);

// const Container = styled.div<LayoutProps<AppearanceProps<null>>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${ElementStyles};
//   ${InputStyles};
//   ${FocusedStyles};

//   cursor: text;
// `;

const Input = styled.input<SSNInputProps>`
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Least};
  -moz-appearance: textfield;

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
