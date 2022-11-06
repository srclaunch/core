import { } from '@srclaunch/types';






export type Message = {
    id?: string;
created_date?: Date | null;
updated_date?: Date | null;
OrganizationId?: string | null;
UserId?: string | null;
message: string;
recipient?: string | null;
  };