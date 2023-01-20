import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
    AlignHorizontal,
    AlignVertical,
    Amount,
    ContainerProps,
    Fill,
    Orientation,
    Size,
    TextColor,
    TextSize,
    TextWeight
} from '../../types';
import { Container } from '../layout/container';
import { Spacer } from '../layout/spacer';
import { Heading } from '../typography/heading';
import { DateLabel } from '../typography/labels/dates/date-label';
import { Paragraph } from '../typography/paragraph';
import { Title } from '../typography/title';

export type MessagePreviewProps = ChatMessage & ContainerProps;

export const MessagePreview = memo(
  ({
    body,
    borderRadius = Amount.Least,
    className = '',
    date,
    paddingBottom = Amount.Default,
    paddingLeft = Amount.More,
    paddingRight = Amount.More,
    paddingTop = Amount.Default,
    subject,
    fill = Fill.Horizontal,
    ...props
  }: MessagePreviewProps): ReactElement => {
    return (
      <Container
        alignHorizontal={AlignHorizontal.Stretch}
        alignVertical={AlignVertical.Top}
        borderRadius={borderRadius}
        className={`${className} message-preview`}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        fill={fill}
        {...props}
      >
        <Container
          alignHorizontal={AlignHorizontal.Stretch}
          orientation={Orientation.Horizontal}
          alignVertical={AlignVertical.Center}
          marginBottom={Amount.Default}

          // marginTop={Amount.Less}
        >
          {/* <Image
            borderRadius={{ all: Amount.Full }}
            margin={{ right: Amount.More }}
            url="http://localhost:3000/public/assets/images/placeholders/people/person1.png"
            // size={Size.Default}
          /> */}

          <Heading
            lineHeight={Amount.Default}
            textColor={TextColor.Light}
            textSize={TextSize.Small}
            textWeight={TextWeight.Default}
          >
            Samanatha Baskin
          </Heading>

          <Spacer size={{ fill: Fill.Horizontal }} />

          <DateLabel
            alignHorizontal={AlignHorizontal.Right}
            lineHeight={Amount.Default}
            value={date}
            textColor={TextColor.Lighter}
            textSize={TextSize.Smaller}
          />
        </Container>

        <Container orientation={Orientation.Horizontal}>
          <Container
            alignHorizontal={AlignHorizontal.Left}
            alignVertical={AlignVertical.Top}
          >
            <Title
              lineHeight={Size.Default}
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
