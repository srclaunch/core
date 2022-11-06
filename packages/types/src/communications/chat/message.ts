import { ISO8601String } from '../../i18n/date';
import { Person } from '../../people/person';

export enum ChatMessageStatus {
  Delivered = 'delivered',
  Read = 'read',
  Sending = 'sending',
  Sent = 'sent',
}

export enum ChatMessageType {
  Audio = 'audio',
  File = 'file',
  Image = 'image',
  Text = 'text',
  Video = 'video',
}

export enum ChatMessageAttachmentType {
  Audio = 'audio',
  File = 'file',
  Image = 'image',
  Video = 'video',
}

export enum ChatMessageReactionType {
  Angry = 'angry',
  Laugh = 'laugh',
  Like = 'like',
  Love = 'love',
  Sad = 'sad',
  Wink = 'wink',
  Wow = 'wow',
  Yay = 'yay',
}

export type ChatMessage = {
  // The message attachments.
  readonly attachments?: readonly {
    // The attachment type.
    readonly type: ChatMessageAttachmentType;

    // The attachment URL.
    readonly url: string;
  }[];

  // The message text.
  readonly body: string;

  // The time the message was sent.
  readonly date: ISO8601String;

  // Unique identifier for the message.
  readonly id?: string;

  // The message reactions.
  readonly reactions?: readonly {
    // The reaction type.
    readonly type: ChatMessageReactionType;
  }[];

  readonly recipients?: readonly Person[];

  // The user who sent the message.
  readonly sender?: {
    readonly avatar?: string;
    readonly id: string;
    readonly name: string;
  };

  // The message status.
  readonly status?: ChatMessageStatus;

  // Subject of the message.
  readonly subject?: string;
  // The type of message.
  readonly type?: ChatMessageType;
};
