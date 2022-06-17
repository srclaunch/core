"use strict";
exports.__esModule = true;
exports.ChatMessageReactionType = exports.ChatMessageAttachmentType = exports.ChatMessageType = exports.ChatMessageStatus = void 0;
var ChatMessageStatus;
(function (ChatMessageStatus) {
    ChatMessageStatus["Delivered"] = "delivered";
    ChatMessageStatus["Read"] = "read";
    ChatMessageStatus["Sending"] = "sending";
    ChatMessageStatus["Sent"] = "sent";
})(ChatMessageStatus = exports.ChatMessageStatus || (exports.ChatMessageStatus = {}));
var ChatMessageType;
(function (ChatMessageType) {
    ChatMessageType["Audio"] = "audio";
    ChatMessageType["File"] = "file";
    ChatMessageType["Image"] = "image";
    ChatMessageType["Text"] = "text";
    ChatMessageType["Video"] = "video";
})(ChatMessageType = exports.ChatMessageType || (exports.ChatMessageType = {}));
var ChatMessageAttachmentType;
(function (ChatMessageAttachmentType) {
    ChatMessageAttachmentType["Audio"] = "audio";
    ChatMessageAttachmentType["File"] = "file";
    ChatMessageAttachmentType["Image"] = "image";
    ChatMessageAttachmentType["Video"] = "video";
})(ChatMessageAttachmentType = exports.ChatMessageAttachmentType || (exports.ChatMessageAttachmentType = {}));
var ChatMessageReactionType;
(function (ChatMessageReactionType) {
    ChatMessageReactionType["Angry"] = "angry";
    ChatMessageReactionType["Laugh"] = "laugh";
    ChatMessageReactionType["Like"] = "like";
    ChatMessageReactionType["Love"] = "love";
    ChatMessageReactionType["Sad"] = "sad";
    ChatMessageReactionType["Wow"] = "wow";
    ChatMessageReactionType["Wink"] = "wink";
    ChatMessageReactionType["Yay"] = "yay";
})(ChatMessageReactionType = exports.ChatMessageReactionType || (exports.ChatMessageReactionType = {}));
