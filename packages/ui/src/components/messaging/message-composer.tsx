import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  BorderStyle,
  ContainerProps,
  Fill,
} from '../../types';
import { Button, ButtonType } from '../forms/buttons/button';
import { Container } from '../layout/container';
import { Label } from '../typography/label';

type MessageComposerProps = ContainerProps;

export const MessageComposer = memo(
  ({
    backgroundColor = BackgroundColor.Default,
    fill = Fill.Both,
    ...props
  }: MessageComposerProps): ReactElement => {
    return (
      <Container
        alignHorizontal={AlignHorizontal.Stretch}
        alignVertical={AlignVertical.Stretch}
        backgroundColor={backgroundColor}
        fill={fill}
        {...props}
      >
        <Container
          alignHorizontal={AlignHorizontal.Center}
          borderBottomColor={BorderColor.Dark}
          padding={Amount.More}
        >
          <Label>Title</Label>
        </Container>
        <Container
          alignHorizontal={AlignHorizontal.Center}
          borderBottomColor={BorderColor.Dark}
          padding={Amount.More}
        >
          <Label>Recipients</Label>
        </Container>
        <Container
          alignHorizontal={AlignHorizontal.Center}
          borderBottomColor={BorderColor.Dark}
          padding={Amount.More}
        >
          <Label>Subject</Label>
        </Container>

        <Container
          alignHorizontal={AlignHorizontal.Left}
          alignVertical={AlignVertical.Bottom}
          padding={Amount.More}
        >
          <Label>Message</Label>
        </Container>

        <Container
          alignHorizontal={AlignHorizontal.Left}
          alignVertical={AlignVertical.Bottom}
          padding={Amount.More}
        >
          <Button type={ButtonType.Primary}>Send</Button>
        </Container>
      </Container>
    );
  },
);
