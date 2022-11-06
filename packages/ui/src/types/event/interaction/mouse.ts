import { DragEventHandler, MouseEventHandler } from 'react';

export type MouseEventProps<E = Element> = {
  readonly onClick?: MouseEventHandler<E>;
  readonly onContextMenu?: MouseEventHandler<E>;
  readonly onDoubleClick?: MouseEventHandler<E>;
  readonly onDrag?: DragEventHandler<E>;
  readonly onDragEnd?: DragEventHandler<E>;
  readonly onDragEnter?: DragEventHandler<E>;
  readonly onDragExit?: DragEventHandler<E>;
  readonly onDragLeave?: DragEventHandler<E>;
  readonly onDragOver?: DragEventHandler<E>;
  readonly onDragStart?: DragEventHandler<E>;
  readonly onDrop?: DragEventHandler<E>;
  readonly onMouseDown?: MouseEventHandler<E>;
  readonly onMouseEnter?: MouseEventHandler<E>;
  readonly onMouseLeave?: MouseEventHandler<E>;
  readonly onMouseMove?: MouseEventHandler<E>;
  readonly onMouseOut?: MouseEventHandler<E>;
  readonly onMouseOver?: MouseEventHandler<E>;
  readonly onMouseUp?: MouseEventHandler<E>;
};
