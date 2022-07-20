import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Fill,
  Orientation,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { Heading } from '../typography/heading';
import { DateLabel } from '../typography/labels/dates/date-label';
import { Paragraph } from '../typography/paragraph';
import { Title } from '../typography/title';

export type MessagePreviewProps = ContainerProps & ChatMessage;

export const MessagePreview = memo(
  ({
    body,
    borderRadius = {},
    className = '',
    date,
    subject,

    ...props
  }: MessagePreviewProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          vertical: AlignVertical.Top,
        }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} message-preview`}
        padding={{
          bottom: Amount.Default,
          left: Amount.More,
          right: Amount.More,
          top: Amount.Default,
        }}
        size={{
          fill: Fill.Horizontal,
        }}
        {...props}
      >
        <Container
          alignment={{
            horizontal: AlignHorizontal.Stretch,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          margin={{ bottom: Amount.Default }}

          // marginTop={Amount.Less}
        >
          {/* <Image
            borderRadius={{ all: Amount.All }}
            margin={{ right: Amount.More }}
            url="http://localhost:3000/public/assets/images/placeholders/people/person1.png"
            // size={Size.Default}
          /> */}

          <Heading
            lineHeight={Amount.Default}
            textColor={TextColors.Light}
            textSize={TextSize.Small}
            textWeight={TextWeight.Default}
          >
            Samanatha Baskin
          </Heading>

          <Spacer size={{ fill: Fill.Horizontal }} />

          <DateLabel
            alignment={{
              horizontal: AlignHorizontal.Right,
            }}
            lineHeight={Amount.Default}
            value={date}
            textColor={TextColors.Lighter}
            textSize={TextSize.Smaller}
          />
        </Container>

        <Container
          alignment={{
            orientation: Orientation.Horizontal,
          }}
        >
          <Container
            alignment={{
              horizontal: AlignHorizontal.Left,
              vertical: AlignVertical.Top,
            }}
          >
            <Title
              lineHeight={Sizes.Default}
              textSize={TextSize.Large}
              textWeight={TextWeight.More}
            >
              {subject}
            </Title>

            <Paragraph>{body}</Paragraph>
          </Container>
        </Container>
      </Container>
    );
  },
);
