// import { validate, ValidationProblem } from '@srclaunch/validation';
import {
  ChangeEvent,
  // forwardRef,
  memo,
  ReactElement,
  // useRef,
  useState
} from 'react';
import styled from 'styled-components'; //  css

import { getInputStyles } from '../../../../styles/forms/input';
import {
  Cursor,
  FormInputProps,
  Size,
  SizeProps,
  StateProps,
  TextAlign,
  TextColor,
  TextSize,
  TextWeight
} from '../../../../types';
import { TextProps } from '../../../typography';

// type IsNumberInput<V> = V extends number ? {} : {};

type InputPropsType<V = unknown, E = HTMLInputElement> = FormInputProps<V, E> &
  SizeProps &
  TextProps<E>;

export type InputProps<V = unknown, E = HTMLInputElement> = InputPropsType<
  V,
  E
> &
  StateProps<InputPropsType<V, E>>;
// const Input2 = forwardRef(
//   (
//     {
//       autoComplete,
//       background = {},
//       border = {},
//       className = '',
//       cursor = Cursor.Text,
//       defaultValue,
//       events = {},
//       lineHeight = Size.Default,
//       name,
//       prefix = '',
//       placeholder = '',
//       size = {},
//       states = {},
//       suffix = '',
//       textColor = TextColor.InputControl,
//       textWeight = TextWeight.Default,
//       type,
//       ...props
//     },
//     ref,
//   ): ReactElement => <></>,
// );

export const Input = memo(
  ({
    autoComplete,
    as = 'input',
    // background = {},
    // border = {},
    className = '',
    cursor = Cursor.Text,
    onChange,
    onValueChange,
    defaultValue,
    lineHeight = Size.Default,
    max,
    maxLength,
    min,
    name,
    prefix = '',
    placeholder = '',
    size = Size.Default,
    state,
    suffix = '',
    textAlign = TextAlign.Left,
    textSize = TextSize.Default,
    textColor = TextColor.Default,
    textWeight = TextWeight.Default,
    type,
    ...props
  }: // ...props
  InputProps<unknown>): ReactElement => {
    const [focused, setFocused] = useState(false);
    // const [problems, setProblems] = useState<ValidationProblem[]>();
    // const inputRef = useRef<HTMLInputElement | null>(null);
    // const [eventHandlers, setEventHandlers] = useState<{
    //   [key: string]: ReactEventHandler;
    // }>({});

    // useEffect(() => {
    //   if (events && Object.keys(events).length > 0) {
    //     setEventHandlers(getEventHandlers(events));
    //   }
    // }, []);
    return (
      <InputElement
        as={as}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        className={`${className} input`}
        cursor={cursor}
        inputSize={size}
        lineHeight={lineHeight}
        max={max}
        maxLength={maxLength}
        min={min}
        name={name}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        textAlign={textAlign}
        textColor={textColor}
        textSize={textSize}
        textWeight={textWeight}
        // value={value}
        // ref={inputRef}
        state={{
          ...state,
          error: state?.error,
          focused,
        }}
        type={type}
        {...props}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = prefix + e.target?.value + suffix;

          if (onValueChange && value !== defaultValue) {
            onValueChange({
              value,
            });
          }

          if (onChange) {
            onChange(e);
          }
        }}
      />
    );
  },
);

const InputElement = styled.input<
  InputProps & { readonly inputSize?: SizeProps }
>`
  ${props => getInputStyles(props)}
`;
