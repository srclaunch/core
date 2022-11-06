import { BasicIcons } from '@srclaunch/icons';
import { validate, ValidationProblem } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  BackgroundColor,
  Color,
  Cursor,
  Orientation,
  Size,
} from '../../../../types';
import { Container } from '../../../layout/container';
import { Icon } from '../../../media/icon';
import { InputContainer, InputContainerProps } from '../shared/input-container';

type CheckboxInputProps = InputContainerProps<boolean>;

export const CheckboxInput = memo(
  ({
    className = '',
    defaultValue,
    onValueChange,
    size = Size.Default,
    validation = {},
    ...props
  }: CheckboxInputProps): React.ReactElement => {
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [value, setValue] = useState(defaultValue);
    const valueReference = useRef(value);

    useEffect(() => {
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
      }
    }, [value]);

    return (
      <InputContainer
        alignHorizontal={AlignHorizontal.Center}
        orientation={Orientation.Horizontal}
        alignVertical={AlignVertical.Center}
        as="button"
        // background={{ color: BackgroundColor.InputControl }}
        className={`${className} checkbox`}
        cursor={Cursor.Pointer}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onClick={() => {
          valueReference.current = !valueReference.current;
          setValue(valueReference.current);
        }}
        form="null"
        state={{ error: problems, focused }}
        size={size}
        {...props}
      >
        <Container>
          <Icon
            color={valueReference.current ? Color.Success : Color.White}
            name={BasicIcons.Checkmark2}
            size={Size.Smaller}
          />
        </Container>
      </InputContainer>
    );
  },
);

// const Box = styled.span<{
//   fixed?: boolean;
//   focused?: boolean;
//   size?: Size;
// }>`
//   ${FocusStyles};

//   align-items: center;
//   background: white;
//   border: 1px solid rgba(230, 230, 230, 1);
//   border-radius: 4px;
//   color: #7b7b7b;
//   cursor: pointer;
//   display: flex;
//   height: ${props => props.size};
//   justify-content: center;
//   margin-right: 5px;
//   position: relative;
//   text-align: center;
//   transition: background 0.2s ease-in-out;
//   width: ${props => props.size};

//   &:before {
//     border-radius: ${Amount.Least};
//   }

//   ${props =>
//     !props.fixed &&
//     css`
//       &:hover {
//         background: rgba(220, 220, 220, 0.1);
//       }
//     `}
// `;
