import { ISO8601String } from "../i18n/date";
import { Person } from '../people/person'

export enum ChatMessageStatus {
  Delivered = "delivered",
  Read = "read",
  Sending = "sending",
  Sent = "sent",
}



export enum ChatMessageType {
  Audio = "audio",
  File = "file",
  Image = "image",
  Text = "text",
  Video = "video",
}

export enum ChatMessageAttachmentType {
  Audio = "audio",
  File = "file",
  Image = "image",
  Video = "video",
}

export enum ChatMessageReactionType {
  Angry = "angry",
  Laugh = "laugh",
  Like = "like",
  Love = "love",
  Sad = "sad",
  Wow = "wow",
  Wink = "wink",
  Yay = "yay",
}


export type ChatMessage = {
  // The message attachments.
  attachments?: {
    // The attachment type.
    type: ChatMessageAttachmentType;

    // The attachment URL.
    url: string;
  }[];

  // The message text.
  body: string;

  // The time the message was sent.
  date: ISO8601String;

  // Unique identifier for the message.
  id?: string;

  // The message reactions.
  reactions?: {
    // The reaction type.
    type: ChatMessageReactionType;
  }[];

  recipients?: Person[];


  // The message status.
  status?: ChatMessageStatus;

  // Subject of the message.
  subject?: string;
 
  // The user who sent the message.
  sender?: {
    avatar?: string;
    id: string;
    name: string;
  };


  
  // The type of message.
  type?: ChatMessageType;
};


