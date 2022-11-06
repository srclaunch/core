import { BankIDCode } from '../../data/primitive';

export type Bank = {
  readonly id: BankIDCode;
  readonly name: string;
};
