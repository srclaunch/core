export enum ModalType {
  Confirm = 'confirm',
  Create = 'create',
  Delete = 'delete',
  Edit = 'edit',
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}

export type Modal = {
  readonly id: string;
  readonly date_created: string;
  readonly label: string;
  readonly type: ModalType;
};
