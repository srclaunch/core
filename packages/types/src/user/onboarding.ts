import {
  OnboardingGuide,
  OnboardingStatus,
  OnboardingStep,
} from '../onboarding';

export type UserOnboardingDetails = {
  readonly guide_id: OnboardingGuide['id'];
  readonly status: OnboardingStatus;
  readonly steps: readonly {
    readonly id: OnboardingStep['id'];
    readonly status: OnboardingStatus;
  }[];
};
