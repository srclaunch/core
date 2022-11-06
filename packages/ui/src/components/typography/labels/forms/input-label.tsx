import { Exception } from '@srclaunch/exceptions';
import { memo, ReactElement } from 'react';

import { getErrorMessage } from '../../../../lib/errors/message';
import {
  AlignHorizontal,
  AlignVertical,
  Fill,
  Orientation,
  TextColor,
  TextSize,
} from '../../../../types';
import { Container } from '../../../layout/container';
import { Label, LabelProps } from '../../label';
import { ErrorLabel } from '../errors/error-label';

type InputLabelProps = LabelProps;

export const InputLabel = memo(
  ({
    alignHorizontal = AlignHorizontal.Left,
    children,
    className = '',
    orientation = Orientation.Horizontal,
    textColor = TextColor.InputLabel,
    textSize = TextSize.Small,
    state,
    ...props
  }: InputLabelProps): ReactElement => {
    return (
      <Container
        orientation={Orientation.Horizontal}
        alignVertical={AlignVertical.Center}
      >
        <Label
          alignHorizontal={alignHorizontal}
          orientation={orientation}
          className={`${className} input-label`}
          textSize={textSize}
          textColor={textColor}
          {...props}
        >
          {children}
        </Label>

        {state &&
          (state?.error instanceof Exception ||
            (Array.isArray(state?.error) && state?.error.length > 0)) && (
            <ErrorLabel
              alignHorizontal={AlignHorizontal.Right}
              fill={Fill.Horizontal}
              textSize={textSize}
            >
              {getErrorMessage(state.error)}
            </ErrorLabel>
          )}
      </Container>
    );
  },
);
