import { Condition } from '@srclaunch/types';
import { validate, ValidationProblem } from '@srclaunch/validation';
import {
  ChangeEvent,
  memo,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Orientation,
  Size,
  TextAlign,
  TextColor,
  TextSize,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/container';

export enum VerificationCodeType {
  Alpha = 'alpha',
  AlphaNumeric = 'alphanumeric',
  Numeric = 'numeric',
}

import { InputProps } from '../shared/input';
import { TextInput } from '../text/text-input';

type VerificationCodeInputProps = ContainerProps<
  InputProps<string> & {
    readonly codeType?: VerificationCodeType;
    readonly length?: number;
  }
>;

export const VerificationCodeInput = memo(
  ({
    as,
    className = '',
    defaultValue,
    onValueChange,
    length = 4,
    name,
    placeholder = '',
    state,
    textSize = TextSize.Larger,
    textColor = TextColor.Dark,
    codeType = VerificationCodeType.Numeric,
    ...props
  }: VerificationCodeInputProps): ReactElement => {
    const [codeParts, setCodeParts] = useState<{
      [key: number]: string | undefined;
    }>({});
    const codePartsReference = useRef(codeParts);
    const [code, setCode] = useState<string | undefined>();
    const codeReference = useRef(code);

    useEffect(() => {
      codeReference.current = Object.values(codePartsReference.current).join(
        '',
      );
      setCode(codeReference.current);
    }, [codeParts]);

    useEffect(() => {
      const typeCondition = () => {
        if (codeType === VerificationCodeType.Alpha) {
          return {
            [Condition.IsAlpha]: true,
          };
        }

        if (codeType === VerificationCodeType.AlphaNumeric) {
          return {
            [Condition.IsAlphanumeric]: true,
          };
        }

        return {
          [Condition.IsNumber]: true,
        };
      };

      // const validation = {
      //   [Condition.IsRequired]: true,
      //   [Condition.IsLengthEqual]: length,
      //   ...typeCondition,
      // };

      // const probs = validate(codeRef, validation) as ValidationProblem[];
      const probs: ValidationProblem[] = [];
      if (onValueChange)
        onValueChange({
          validation: {
            problems: probs,
            validated: probs.length === 0,
          },
          value: codeReference.current,
        });
    }, [code]);

    return (
      <Container
        alignHorizontal={AlignHorizontal.Center}
        orientation={Orientation.Horizontal}
        alignVertical={AlignVertical.Center}
        className={`${className} verification-code-input`}
        {...props}
      >
        {[...new Array(length)].map((_, key) => {
          return (
            <TextInput
              defaultValue={codeParts[key]}
              id={`${name}-verification-code-input-${key}`}
              onPaste={e => {
                console.log('onPaste', e);

                if (key === 0) {
                  const pastedText = e.clipboardData.getData('Text');

                  if (
                    pastedText &&
                    pastedText.length === length &&
                    !Number.isNaN(pastedText)
                  ) {
                    let object = {};
                    let index = 0;

                    for (const value of pastedText) {
                      const property = { [index]: value };

                      object = { ...object, ...property };
                      index += 1;
                    }

                    codePartsReference.current = object;
                    setCodeParts(object);
                  }
                }
              }}
              onChange={event => {
                // @ts-ignore
                if (e.nativeEvent.inputType !== 'insertFromPaste') {
                  const currentCodePart = codePartsReference.current?.[key];

                  if (
                    // @ts-ignore
                    event.target.value.length === 1 ||
                    // @ts-ignore
                    event.target.value.length === 0
                  ) {
                    codePartsReference.current = {
                      ...codePartsReference.current,
                      // @ts-ignore
                      [key]: e.target.value,
                    };

                    setCodeParts({
                      ...codePartsReference.current,
                      // @ts-ignore
                      [key]: event.target.value,
                    });
                  } else {
                    codePartsReference.current = {
                      ...codePartsReference.current,
                      [key]: undefined,
                    };
                    setCodeParts({
                      ...codePartsReference.current,
                      [key]: undefined,
                    });
                  }

                  // @ts-ignore
                  if (event.target.value.length === 1 && !currentCodePart) {
                    const nextElement = document.getElementById(
                      `${name}-verification-code-input-${key + 1}`,
                    );

                    if (nextElement) {
                      nextElement.focus();
                    }
                  }
                }
              }}
              onKeyDown={e => {
                if (
                  e.key === 'Delete' ||
                  // @ts-ignore
                  (e.key === 'Backspace' && !e.target.value)
                ) {
                  const lastElement = document.getElementById(
                    `${name}-verification-code-input-${key - 1}`,
                  );

                  if (lastElement) {
                    lastElement.focus();
                  }
                }
              }}
              key={key}
              lineHeight={Size.Largest}
              marginLeft={Amount.Least}
              marginRight={Amount.Least}
              max={9}
              maxLength={1}
              min={0}
              size={Size.Largest}
              textAlign={TextAlign.Center}
              textSize={TextSize.Larger}
            />
          );
        })}
      </Container>
    );
  },
);
