import { ISO8601 } from '../data/primitive';

export enum Analytics {
  Business = 'business',
  Engineering = 'engineering',
  Exception = 'exception',
  LogMessage = 'log-message',
  Marketing = 'marketing',
  PageLeave = 'page-leave',
  PageView = 'page-view',
  Product = 'product',
  QualityManagement = 'quality-management',
  UserAccess = 'user-access',
  UserLogin = 'user-login',
  UserLogout = 'user-logout',
  UserPreferencesChanged = 'user-preferences-changed',
  UserSignup = 'user-signup',
  WebsiteVisit = 'website-visit',
}

export type AnalyticsEvent<T = Record<string, unknown>> = T & {
  readonly created: ISO8601;
  readonly data?: Record<string, unknown>;
  readonly id?: string;
  readonly message?: string;
  readonly name: Analytics;
};

export * from './business';
export * from './engineering';
export * from './marketing';
export * from './product';
export * from './user';
export * from './web';
