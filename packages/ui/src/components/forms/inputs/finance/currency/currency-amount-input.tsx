import { Condition, CurrencyAmount } from '@srclaunch/types';
import { validate, ValidationProblem } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import CurrencyInputField from 'react-currency-input-field';

import {
  Amount,
  BackgroundColor,
  BorderColor,
  Shadow,
  TextColor,
  TextWeight,
} from '../../../../../types';
import { Label } from '../../../../typography/label';
import { InputLabel } from '../../../../typography/labels/forms/input-label';
import {
  InputContainer,
  InputContainerProps,
} from '../../shared/input-container';

type CurrencyAmountInputProps = InputContainerProps<CurrencyAmount>;
export const CurrencyAmountInput = memo(
  ({
    backgroundColor = BackgroundColor.Lightest,
    borderColor = BorderColor.Light,
    className = '',
    defaultValue,
    // events = {},
    onValueChange,
    label,
    name,
    shadow = Shadow.Low,
    state,
    textColor = TextColor.InputControl,
    textWeight = TextWeight.Default,
    validation = { conditions: { [Condition.IsCurrency]: true } },
  }: CurrencyAmountInputProps): ReactElement => {
    const [value, setValue] = useState<number>(defaultValue ?? 0);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const inputReference = useRef<HTMLInputElement>(null);
    const [valueChanged, setValueChanged] = useState(false);

    useEffect(() => {
      if (valueChanged) {
        if (validation?.conditions) {
          const probs = validate(
            value,
            // @ts-ignore
            validation.conditions,
          ) as ValidationProblem[];

          setProblems(probs);

          if (onValueChange)
            onValueChange({
              validation: { problems: probs, validated: probs.length === 0 },
              value,
            });
        } else {
          if (onValueChange)
            onValueChange({
              value,
            });
        }
      }
    }, [value]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel states={{ state: { error: problems } }}>
            {label}
          </InputLabel>
        )}

        <InputContainer
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          className={`${className} currency-amount-input`}
          onClick={() => {
            if (inputReference.current) inputReference.current.focus();
          }}
          shadow={shadow}
          state={state}
        >
          <Label
            marginLeft={Amount.Less}
            marginRight={Amount.Less}

            // textColor={!value ? TextColor.InputPlaceholder : textColor}
          >
            $
          </Label>

          <CurrencyInputField
            className="currency-input"
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            name={name}
            defaultValue={value ? Number(value).toFixed(2) : 0}
            // fixedDecimalLength={2}
            onValueChange={v => {
              setValueChanged(true);
              setValue(Number.parseInt(v ?? '0'));
            }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: !value
                ? `rgb(${TextColor.InputPlaceholder})`
                : `rgb(${TextColor.InputControl})`,

              fontWeight: textWeight,
            }}
          />
        </InputContainer>
      </>
    );
  },
);
