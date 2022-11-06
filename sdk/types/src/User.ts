import { } from '@srclaunch/types';









export type User = {
    id?: string;
created_date?: Date | null;
updated_date?: Date | null;
PersonId?: string | null;
TeamId?: string | null;
access?: Record<string, any> | null;
cognito_id?: string | null;
membership?: Record<string, any> | null;
onboarding?: Record<string, any> | null;
preferences?: Record<string, any> | null;
  };