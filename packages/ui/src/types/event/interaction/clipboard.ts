import { ClipboardEventHandler } from 'react';

export type ClipboardEventProps<E = Element> = {
  readonly onCopy?: ClipboardEventHandler<E>;
  readonly onCut?: ClipboardEventHandler<E>;
  readonly onPaste?: ClipboardEventHandler<E>;
};
