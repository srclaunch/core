import { ValidationProblem } from '@srclaunch/validation';
import {
  memo,
  MouseEvent,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';

import {
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Color,
  Fill,
  IconColor,
  Orientation,
  Shadow,
  Size,
  TextAlign,
  TextColor,
  TextSize
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';
import { Icon, IconProps } from '../../../media/icon';
import { ProgressSpinner } from '../../../progress/progress-spinner';
import { TextProps } from '../../../typography';
import { InputLabel } from '../../../typography/labels/forms/input-label';
import { Input, InputProps } from './input';

export type InputContainerProps<V, E = HTMLInputElement> = ContainerProps<
  InputProps<V, E> &
    TextProps & {
      readonly icon?: IconProps;
      readonly placeholder?: string;
      readonly prefix?: string;
      readonly spellCheck?: boolean;
      readonly suffix?: string;
    },
  E
>;

export const InputContainer = memo(
  ({
    children,
    className = '',
    defaultValue,
    onValueChange,
    onChange,
    icon,
    backgroundColor = BackgroundColor.InputControl,
    borderColor = BorderColor.Default,
    label,
    onClick,
    lineHeight = Size.Default,
    max,
    maxLength,
    min,
    onFocus,
    borderRadius = Amount.Least,
    alignVertical = AlignVertical.Center,
    // name,
    placeholder = '',
    shadow = Shadow.Low,
    size = Size.Default,
    state,
    onBlur,
    textAlign = TextAlign.Left,
    textColor = TextColor.Default,
    textSize = TextSize.Default,
    type,
    orientation = Orientation.Horizontal,
    validation = {},
    ...props
  }: InputContainerProps<unknown>): ReactElement => {
    const [value, setValue] = useState(defaultValue);
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const focusedRef = useRef(focused);
    const [problems, setProblems] = useState<ValidationProblem[]>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (valueChanged && value !== defaultValue) {
        if (validation?.conditions) {
          // const probs = validate(
          //   value,
          //   validation?.conditions,
          // ) as ValidationProblem[];
          const probs: ValidationProblem[] = [];
          setProblems(probs && probs.length > 0 ? probs : undefined);

          if (onValueChange)
            onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value,
            });
        } else {
          if (onValueChange) {
            onValueChange({
              value,
            });
          }
        }
      }
    }, [value]);

    return (
      <Container
        className={`${className} input-container`}
        onClick={(e: MouseEvent<Element, globalThis.MouseEvent>) => {
          if (children) {
            inputRef.current?.focus();
          }

          if (onClick) {
            onClick(e as MouseEvent);
          }
        }}
        fill={Fill.Horizontal}
      >
        {(label || problems) && (
          <InputLabel
            state={{
              error: problems,
            }}
          >
            {label}
          </InputLabel>
        )}

        <Container
          orientation={orientation}
          alignVertical={alignVertical}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          borderColor={
            state?.error && Array.isArray(state.error) && state.error.length > 0
              ? Color.Error
              : borderColor
          }
          className={`${className} input-container-wrapper`}
          lineHeight={lineHeight}
          shadow={shadow}
          size={size}
          state={{
            ...state,
            error: problems,
            focused: state?.focused ?? focusedRef.current,
          }}
          {...props}
        >
          {icon && (
            <Icon
              color={icon.color ?? IconColor.Default}
              marginLeft={Amount.Less}
              {...icon}
            />
          )}

          {children && children}

          {!children && (
            <Input
              defaultValue={defaultValue}
              onBlur={e => {
                focusedRef.current = false;
                setFocused(false);

                if (onBlur) {
                  onBlur(e);
                }
              }}
              onFocus={e => {
                focusedRef.current = true;
                setFocused(true);

                if (onFocus) {
                  onFocus(e);
                }
              }}
              onChange={onChange}
              onValueChange={({ value: inputValue }) => {
                setValueChanged(true);
                setValue(inputValue);
              }}
              max={max}
              maxLength={maxLength}
              min={min}
              placeholder={placeholder}
              textAlign={textAlign}
              textColor={textColor}
              textSize={textSize}
              type={type}
            />
          )}

          {state?.loading && <ProgressSpinner size={Size.Small} />}
        </Container>
      </Container>
    );
  },
);
