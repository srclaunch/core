import { } from '@srclaunch/types';











export type Invoice = {
    id?: string;
created_date?: Date | null;
updated_date?: Date | null;
OrganizationId?: string | null;
PaymentId?: string | null;
UserId?: string | null;
amount: number;
currency: string;
date: unknown;
due_date: unknown;
notes?: string | null;
status: string;
  };