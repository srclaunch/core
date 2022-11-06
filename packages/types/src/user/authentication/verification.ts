import { CommunicationMedium } from '../../communications/medium';

/**
 * @enum AuthenticationStatus
 * @property Archived - User is no longer active.
 * @property Compromised - User is disabled due to a potential security threat.
 * @property Confirmed - User has been confirmed.
 * @property ForcePasswordChange - The user is confirmed and the user can sign in
 * using a temporary password, but on first sign-in, the user must change his
 * or her password to a new value before doing anything else.
 * @property ResetRequired - User is confirmed, but the user must request a
 * code and reset his or her password before he or she can sign in.
 * @property Unconfirmed - User has been created but not confirmed.
 * @property Unknown - User status is not known.
 */
export enum UserVerificationStatus {
  Archived = 'ARCHIVED',
  Compromised = 'COMPROMISED',
  Confirmed = 'CONFIRMED',
  ForcePasswordChange = 'FORCE_CHANGE_PASSWORD',
  ResetRequired = 'RESET_REQUIRED',
  Unconfirmed = 'UNCONFIRMED',
  Unknown = 'UNKNOWN',
}

export enum UserAuthenticationVerificationType {
  Code = 'code',
  Link = 'link',
}

export type UserVerificationDetails = {
  readonly delivery: {
    readonly destination: string;
    readonly medium: CommunicationMedium.Email;
  };
  readonly status: UserVerificationStatus;
};
