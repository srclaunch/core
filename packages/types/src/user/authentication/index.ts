import { CommunicationMedium } from '../../communications/medium';
import {
  UserVerificationDetails,
  UserVerificationStatus,
} from './verification';

export type UserAuthenticationDetails = {
  readonly cognito: {
    readonly id: string;
  };
  readonly logged_in?: boolean;
  readonly login_count?: number;
  readonly status: UserVerificationStatus;
  readonly username?: {
    readonly email_address?: string;
    readonly phone_number?: string;
    readonly type?: CommunicationMedium;
  };
  readonly verification: UserVerificationDetails;
};

export * from './cognito';
export * from './login';
export * from './verification';
