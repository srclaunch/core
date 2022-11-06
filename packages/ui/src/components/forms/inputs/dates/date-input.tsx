import { BasicIcons } from '@srclaunch/icons';
import { Condition, ISO8601String } from '@srclaunch/types';
import { ValidationProblem } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';
// import DatePickerC from 'react-date-picker';
// import css from 'react-date-picker/dist/DatePicker.css';
import styled from 'styled-components';

import { ShadowStyles } from '../../../../styles/appearance/shadow';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Color,
  Cursor,
  IconColor,
  Shadow,
  Size,
  TextColor,
  TextSize,
  TextWeight,
} from '../../../../types';
import { Container } from '../../../layout/container';
import { Icon } from '../../../media/icon';
import { InputLabel } from '../../../typography/labels/forms/input-label';
import { InputContainer, InputContainerProps } from '../shared/input-container';

export type DateInputProps = InputContainerProps<ISO8601String>;

const getBorderColor = ({
  focused,
  error,
}: {
  readonly error?: readonly ValidationProblem[];
  readonly focused?: boolean;
}) => {
  if (error && Array.isArray(error) && error.length > 0) return Color.Error;

  if (focused) return Color.Primary;

  return BorderColor.Light;
};

const Wrapper = styled.div<{
  readonly boxShadow?: Shadow;
  readonly error?: readonly ValidationProblem[];
  readonly focused?: boolean;
  readonly size: Size;
}>`
  background: transparent;
  border: none;
  width: 100%;
  ${ShadowStyles};

  .react-date-picker,
  .react-date-picker__wrapper {
    width: 100%;

    .react-calendar {
      color: rgb(${TextColor.Lighter});
      overflow: hidden;
      width: 100%;
    }
  }

  .react-date-picker__wrapper {
    background: transparent;
    box-shadow: 0 0 0 transparent;
    border: none;
    cursor: ${Cursor.Pointer};
    width: 100%;
  }

  .react-date-picker__inputGroup {
    line-height: 26px;
    padding: 0 ${Amount.Least};
  }

  .react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    color: rgb(${TextColor.Light});
    font-size: 14px;
    font-weight: 500;
  }

  .react-date-picker__inputGroup__leadingZero {
    margin-right: 4px;
  }

  input.react-date-picker__inputGroup__input,
  .react-date-picker__inputGroup__leadingZero {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    color: rgb(${TextColor.Light});
    height: initial;
    line-height: 24px;
    padding: 2px 6px 3px 6px;
    text-align: center;
    vertical-align: middle;

    &:hover {
      border: 1px solid rgb(${BorderColor.Light});
    }

    &:focus {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
      border: 1px solid rgb(${Color.Primary});
    }
  }

  .react-date-picker__inputGroup__divider {
    color: rgb(${TextColor.Default});
  }

  .react-date-picker__calendar {
    background-color: rgb(${BackgroundColor.Lightest});
    border: 2px solid
      rgb(
        ${props =>
          getBorderColor({ error: props.error, focused: props.focused })}
      );
    border-top: none;
    border-radius: 0 0 ${Amount.Least} ${Amount.Least};
    /* box-shadow: $ {Shadow.Higher}; */
    height: auto !important;
    left: -4px !important;
    padding: ${Amount.Least};
    right: -1px !important;
    top: calc(${props => props.size} - 3px) !important;
    transition: border 0.2s ease-in-out, opacity 0.2s ease-in-out,
      transform 0.2s ease-in-out;
    z-index: 100500;
    width: calc(100% + (${props => props.size} + 8px));
  }

  .react-date-picker__calendar.react-date-picker__calendar--closed {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
  }

  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__arrow {
      background-color: rgb(${BackgroundColor.Dark});
      border: none;
      border-radius: ${Size.Default};
      color: rgb(${TextColor.Lighter});
      cursor: ${Cursor.Pointer};
      height: ${Size.Default};
      margin: 0 ${Amount.Least};
      text-align: center;
      width: ${Size.Default};

      &:hover {
        background-color: rgb(${BackgroundColor.Darker});
      }
    }

    .react-calendar__navigation__label {
      background-color: transparent;
      border: none;
      border-radius: ${Amount.All};
      color: rgb(${TextColor.Default});
      cursor: ${Cursor.Pointer};
      font-weight: ${TextWeight.More};
      padding: ${Amount.Least} 0;

      &:hover {
        background-color: rgb(${BackgroundColor.Darker});
      }
    }
  }

  .react-calendar__tile {
    background: transparent;
    border: none;
    border-radius: ${Amount.Least};
    color: rgb(${TextColor.Default});
    padding: ${Amount.Less} 0;

    &:hover {
      background-color: rgb(${BackgroundColor.Darker});
      color: rgb(${TextColor.Light});
      cursor: ${Cursor.Pointer};
    }
  }

  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: rgb(${Color.Primary}) !important;
    color: rgb(${TextColor.Light});
  }

  .react-calendar__month-view__weekdays__weekday {
    border: none;
    font-size: ${TextSize.Small};
    padding: ${Amount.Least} 0;
    text-align: center;
    text-decoration: none;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgb(${TextColor.Darker});
  }
`;

export const DateInput = memo(
  ({
    className = '',

    defaultValue,
    label,
    onValueChange,
    state,
    shadow = Shadow.Low,
    textSize = TextSize.Default,
    validation = { conditions: { [Condition.IsDate]: true } },
    ...props
  }: DateInputProps): ReactElement => {
    const [value, setValue] = useState<ISO8601String | undefined>(defaultValue);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[] | undefined>(
      [],
    );
    const [valueChanged, setValueChanged] = useState(false);

    useEffect(() => {
      if (valueChanged) {
        if (validation?.conditions) {
          // const probs = validate(
          //   value,
          //   validation.conditions,
          // ) as ValidationProblem[];
          const probs: ValidationProblem[] = [];
          setProblems(probs);

          if (onValueChange)
            onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value,
            });
        } else {
          if (onValueChange && value)
            onValueChange({
              validation: {
                problems: [],
                validated: true,
              },
              value,
            });
        }
      }
    }, [value]);

    return (
      <>
        {(label || (problems && problems.length > 0)) && (
          <InputLabel state={{ error: problems, ...state }}>{label}</InputLabel>
        )}

        <InputContainer
          className={`${className} date-input`}
          onMouseLeave={() => setFocused(false)}
          state={{ ...state, error: problems, focused }}
          // onClick={() => setFocused(!focused)}
          shadow={!focused ? shadow : Shadow.Higher}
          {...props}
        >
          {/* <DatePickerC
              calendarType="ISO 8601"
              // calendarIcon={
              //   <CalendarIcon focused={focused}>
              //     <Icon name={BasicIcons.Calendar} />
              //   </CalendarIcon>
              // }
              // clearIcon={<Icon {...resetIcon} />}
              calendarIcon={null}
              clearIcon={null}
              // isOpen={focused}
              locale="en-US"
              openCalendarOnFocus
              onChange={(val?: Date) => {
                setValueChanged(true);

                if (val) setValue(val.toISOString());
              }}
              onCalendarOpen={() => {
                setFocused(true);
              }}
              onCalendarClose={() => {
                setFocused(false);
              }}
              value={value ? new Date(value) : undefined}
            /> */}

          <Container
            alignVertical={AlignVertical.Center}
            alignHorizontal={AlignHorizontal.Center}
            borderLeftColor={BorderColor.Light}
            className="down-arrow"
            size={Size.Default}

            // onClick={() => setFocused(!focused)}
          >
            <Icon
              color={focused ? IconColor.Lightest : IconColor.Lighter}
              name={BasicIcons.CaretDownArrow}
              className={focused ? 'up' : 'down'}
              size={Size.Smallest}

              // transform={{
              //   rotate: focused ? 0 : 0,
              // }}
            />
          </Container>
        </InputContainer>
      </>
    );
  },
);
