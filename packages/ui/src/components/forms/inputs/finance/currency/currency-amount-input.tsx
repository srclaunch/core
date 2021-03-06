import {
  // Condition,
  CurrencyAmount,
} from '@srclaunch/types';
// import { ValidationProblem } from '@srclaunch/validation';
import {
  memo,
  ReactElement,
  useRef,
  //  useState
} from 'react';

// import CurrencyInputField from 'react-currency-input-field';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  DepthShadow,
  // TextColors,
} from '../../../../../types';
import { Label } from '../../../../typography/label';
// import { InputLabel } from '../../../../typography/labels/forms/input-label';
import {
  InputContainer,
  InputContainerProps,
} from '../../shared/input-container';

type CurrencyAmountInputProps = InputContainerProps<CurrencyAmount>;
export const CurrencyAmountInput = memo(
  ({
    background = {},
    border = {},
    className = '',
    // defaultValue,
    // events = {},
    // label,
    // name,
    shadow = DepthShadow.Low,
    states = {},
  }: // textColor = TextColors.InputControl,
  // textWeight = TextWeight.Default,
  // validation = { conditions: { [Condition.IsCurrency]: true } },
  CurrencyAmountInputProps): ReactElement => {
    // const [value, setValue] = useState<number>(defaultValue ?? 0);
    // const [focused, setFocused] = useState(false);
    // const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    // const [valueChanged, setValueChanged] = useState(false);

    // useEffect(() => {
    //   if (valueChanged) {
    //     if (validation?.conditions) {
    //       // const probs = validate(
    //       //   value,
    //       //   validation.conditions,
    //       // ) as ValidationProblem[];
    //       const probs: ValidationProblem[] = [];
    //       setProblems(probs);

    //     //   if (events.input?.onValueChange)
    //     //     events.input.onValueChange({
    //     //       validation: { problems: probs, validated: probs.length === 0 },
    //     //       value,
    //     //     });
    //     // } else {
    //     //   if (events.input?.onValueChange)
    //     //     events.input.onValueChange({
    //     //       value,
    //     //     });
    //     // }
    //   }
    // }, [value]);

    return (
      <>
        {/* {(label || problems.length > 0) && (
          <InputLabel states={{ state: { error: problems } }}>
            {label}
          </InputLabel>
        )} */}

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
          className={`${className} currency-amount-input`}
          events={{
            mouse: {
              onClick: () => {
                if (inputRef.current) inputRef.current.focus();
              },
            },
          }}
          shadow={shadow}
          states={{
            state: {
              // error: problems,
              // focused,
            },
            ...states,
          }}
        >
          <Label
            margin={{
              left: Amount.Less,
              right: Amount.Least,
            }}
            // textColor={!value ? TextColors.InputPlaceholder : textColor}
          >
            $
          </Label>
          {/* 
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
                ? `rgb(${TextColors.InputPlaceholder})`
                : `rgb(${TextColors.InputControl})`,

              fontWeight: textWeight,
            }}
          /> */}
        </InputContainer>
      </>
    );
  },
);
