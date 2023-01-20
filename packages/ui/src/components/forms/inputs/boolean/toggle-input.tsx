import { BasicIcons } from '@srclaunch/icons';
import { ValidationProblem } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';

import { getCSSMeasurement } from '../../../../lib';
import {
    AlignHorizontal,
    AlignVertical,
    Amount,
    BackgroundColor,
    BorderColor,
    Color,
    Cursor,
    Depth,
    FormInputProps,
    IconColor,
    Orientation,
    Shadow,
    Size,
    TextColor
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';
import { Icon } from '../../../media/icon';
import { Label } from '../../../typography/label';
import { ErrorLabel } from '../../../typography/labels/errors/error-label';
import { InputLabel } from '../../../typography/labels/forms/input-label';
import { Button, ButtonType } from '../../buttons/button';

export type ToggleInputProps = ContainerProps<
  FormInputProps<boolean> & {
    readonly falseLabel?: string;
    readonly trueLabel?: string;
  }
>;

export const ToggleInput = memo(
  ({
    className = '',
    cursor = Cursor.Pointer,
    defaultValue = false,
    onValueChange,
    falseLabel,
    label,
    state,
    trueLabel,
    size = Size.Default,
  }: ToggleInputProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [toggleValue, setToggleValue] = useState(defaultValue);
    const toggleValueReference = useRef(toggleValue);

    useEffect(() => {
      if (onValueChange) onValueChange({ value: toggleValue });
    }, [toggleValue]);

    useEffect(() => {
      setToggleValue(defaultValue ?? toggleValue ?? '');
    }, [defaultValue]);

    return (
      <>
        <Container orientation={Orientation.Horizontal}>
          {label && <InputLabel>{label}</InputLabel>}

          {problems.length > 0 && (
            <ErrorLabel alignHorizontal={AlignHorizontal.Right}>
              {problems[0]?.message.short}
            </ErrorLabel>
          )}
        </Container>

        <Container
          alignHorizontal={AlignHorizontal.Left}
          orientation={Orientation.Horizontal}
          alignVertical={AlignVertical.Center}
          className={`${className} toggle-input`}
        >
          {falseLabel && (
            <Button
              cursor={cursor}
              form="null"
              onClick={() => {
                toggleValueReference.current = false;
                setToggleValue(false);
              }}
              type={ButtonType.Inline}
            >
              <Label
                className="toggle-input-falsey-label"
                textColor={!toggleValue ? TextColor.Light : TextColor.Lighter}
              >
                {falseLabel}
              </Label>
            </Button>
          )}

          <Container
            alignHorizontal={AlignHorizontal.Left}
            alignVertical={AlignVertical.Center}
            as="button"
            backgroundColor={BackgroundColor.Lightest}
            borderRadius={Amount.Full}
            borderColor={BorderColor.Light}
            cursor={cursor}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            onClick={() => {
              toggleValueReference.current = !toggleValueReference.current;
              setToggleValue(toggleValueReference.current);
            }}
            height={size}
            form="null"
            padding={Amount.Least}
            shadow={Shadow.Low}
            width={getCSSMeasurement(`calc(${size} * 2)`)}
          >
            <Container
              alignHorizontal={AlignHorizontal.Center}
              alignVertical={AlignVertical.Center}
              backgroundColor={
                toggleValueReference.current === true
                  ? Color.Primary
                  : Color.Error
              }
              borderRadius={Amount.Full}
              cursor={cursor}
              depth={Depth.High}
              shadow={Shadow.High}
              height={getCSSMeasurement(`calc((${size} / 3) * 2)`)}
              width={getCSSMeasurement(`calc((${size} / 3) * 2)`)}
              on={{
                translateX: 0,
              }}
              state={{
                ...state,
                focused,
                on: toggleValue,
              }}
            >
              <Icon
                color={IconColor.White}
                name={
                  toggleValueReference.current === true
                    ? BasicIcons.Checkmark2
                    : BasicIcons.Close
                }
                size={Size.Smallest}
              />
            </Container>
          </Container>

          {trueLabel && (
            <Button
              cursor={cursor}
              form={'null'}
              onClick={() => {
                toggleValueReference.current = true;
                setToggleValue(true);
              }}
              type={ButtonType.Inline}
            >
              <Label
                className="toggle-input-truthy-label"
                textColor={toggleValue ? TextColor.Light : TextColor.Lighter}
              >
                {trueLabel}
              </Label>
            </Button>
          )}
        </Container>
      </>
    );
  },
);

// const Label = styled.label`
//   color: rgba(150, 150, 150, 1);
//   display: block;
//   font-size: 16px;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const ToggleSwitch = styled.span<
//   {
//     readonly toggleValue: boolean;
//   } & ContainerProps<HTMLSpanElement> &
//     FocusProps
// >`
//   ${FocusStyles};

//   border-radius: ${Amount.Full};
//   height: ${props => `calc(${props.size} - 8px)`};
//   transform: translateX(0);
//   transition: background 0.1s ease-in-out, transform 0.1s ease-in-out;
//   width: ${props => `calc(${props.size} - 8px)`};

//   i.icon {
//     opacity: 0;
//     transition: opacity 0.1s ease-in-out;
//   }
//   /*
//   @keyframes toggle-animation {
//     0% {
//       height: 100%;
//     }

//     50% {
//       height: 50%;
//       width: 50%;
//     }

//     100% {
//       height: 100%;
//     }
//   } */

//   &:before {
//     border-radius: 100%;
//   }

//   ${props =>
//     props.toggleValue === true &&
//     css`
//       transform: translateX(calc(${props.size} - ${Amount.Least}));
//       /* animation: toggle-animation 0.2s ease-in-out; */

//       i.icon {
//         opacity: 1;
//       }
//     `}

//   ${props =>
//     props.toggleValue === false &&
//     css`
//       /* */
//     `}
// `;
