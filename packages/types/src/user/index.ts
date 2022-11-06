import { Organization } from '../business/organization/index';
import { Team } from '../business/organization/team/index';
import { Person } from '../people/person';
import { UserAccessDetails } from './access';
import { UserAuthenticationDetails } from './authentication';
import { UserGroup } from './group';
import { UserMembershipDetails } from './membership';
import { UserOnboardingDetails } from './onboarding';
import { UserPreferences } from './preferences';
import { UserRole } from './role';

export type UserDetails = {
  readonly access: UserAccessDetails;
  readonly authentication: UserAuthenticationDetails;
  readonly groups?: readonly UserGroup[];
  readonly membership: UserMembershipDetails;
  readonly onboarding: UserOnboardingDetails;
  readonly organizations: readonly Organization['id'][];
  readonly preferences: UserPreferences;
  readonly role?: UserRole;
  readonly teams?: readonly Team['id'][];
};

export type User = Person &
  UserDetails & {
    readonly id: string;
    readonly username: string;
  };

export * from './access';
export * from './authentication';
export * from './group';
export * from './membership';
export * from './onboarding';
export * from './preferences';
export * from './role';
