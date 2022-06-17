export enum OnboardingStatus {
  Completed = 'completed',
  Started = 'started',
  Uncompleted = 'uncompleted',
}

export type OnboardingStep = {
  description: string;
  id: string;
  guide_id: OnboardingGuide;
  name: string;
};

export type OnboardingGuide = {
  id: string;
  name: string;
  description: string;
  steps: OnboardingStep['id'][];
};
