import { UserAccessDevice } from '../../user/access';
import { Analytics, AnalyticsEvent } from '..';

export enum PageLeaveMethod {
  CloseTab = 'close-tab',
  ExternalLink = 'external-link',
  NavigateAway = 'navigate-away',
  Unknown = 'unknown',
}

export type PageViewEvent = AnalyticsEvent<{
  readonly data: {
    readonly device: UserAccessDevice;
    readonly referrer?: string;
  };
  readonly description: 'Occurs when a person views a page in a Website or application.';
  readonly id: string;
  readonly name: Analytics.PageView;
}>;

export type PageLeaveEvent = AnalyticsEvent<{
  readonly data: {
    readonly device: UserAccessDevice;
    readonly leaveMethod: PageLeaveMethod;
  };
  readonly description: 'Occurs when a person leaves a page.';
  readonly id: string;
  readonly name: Analytics.PageLeave;
}>;

export type WebsiteVisitEvent = AnalyticsEvent<{
  readonly description: 'Occurs when a person a website.';
  readonly device: UserAccessDevice;
  readonly id: string;
  readonly name: Analytics.WebsiteVisit;
}>;
