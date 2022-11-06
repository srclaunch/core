export enum NotificationType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}

export type Notification = {
  readonly id: string;
  readonly date_created: string;
  readonly label: string;
  readonly type: NotificationType;
};
