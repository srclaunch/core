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
  UserSignup = 'user-signup',
  UserPreferencesChanged = 'user-preferences-changed',
  WebsiteVisit = 'website-visit',
}

export type AnalyticsEvent<T = {}> = {
  created: ISO8601;
  data?: Record<string, unknown>;
  id?: string;
  message?: string;
  name: Analytics;
} & T;
