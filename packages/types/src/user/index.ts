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
  access: UserAccessDetails;
  authentication: UserAuthenticationDetails;
  groups?: UserGroup[];
  membership: UserMembershipDetails;
  onboarding: UserOnboardingDetails;
  organizations: Organization['id'][];
  preferences: UserPreferences;
  role?: UserRole;
  teams?: Team['id'][];
};

export type User = {
  id: string;
  username: string;
} & UserDetails &
  Person;
