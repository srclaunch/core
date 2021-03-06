import { CommunicationMedium } from '../../communications/medium';
import {
  UserVerificationDetails,
  UserVerificationStatus,
} from './verification';

export type UserAuthenticationDetails = {
  cognito: {
    id: string;
  };
  logged_in?: boolean;
  login_count?: number;
  status: UserVerificationStatus;
  username?: {
    email_address?: string;
    phone_number?: string;
    type?: CommunicationMedium;
  };
  verification: UserVerificationDetails;
};
