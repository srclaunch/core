import { UserAccessDevice } from '../../user/access';
import { Analytics, AnalyticsEvent } from '..';

export enum PageLeaveMethod {
  CloseTab = 'close-tab',
  ExternalLink = 'external-link',
  NavigateAway = 'navigate-away',
  Unknown = 'unknown',
}

export type PageViewEvent = AnalyticsEvent<{
  data: {
    device: UserAccessDevice;
    referrer_url?: string;
  };
  description: 'Occurs when a person views a page in a Website or application.';
  id: string;
  name: Analytics.PageView;
}>;

export type PageLeaveEvent = AnalyticsEvent<{
  data: {
    device: UserAccessDevice;
    leave_method: PageLeaveMethod;
  };
  description: 'Occurs when a person leaves a page.';
  id: string;
  name: Analytics.PageLeave;
}>;

export type WebsiteVisitEvent = AnalyticsEvent<{
  device: UserAccessDevice;
  description: 'Occurs when a person a website.';
  id: string;
  name: Analytics.WebsiteVisit;
}>;
