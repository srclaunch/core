import { Condition, ProjectConfig } from '@srclaunch/types';

import { getValidationProblemLabel } from '../problem';
import { ValidationProblem } from '../types/problem';

export const validateSrcLaunchConfig = (config: ProjectConfig) => {
  let problems: ValidationProblem[] = [];
  if (!config) {
    problems = [
      {
        message: getValidationProblemLabel(Condition.IsRequired),
      },
    ] as ValidationProblem[];
  }

  if (!config.name) {
    problems = [
      ...problems,
      getValidationProblemLabel(Condition.IsRequired, {
        subject: 'name',
      }),
    ] as ValidationProblem[];
  }

  if (!config.description) {
    problems = [
      ...problems,
      getValidationProblemLabel(Condition.IsRequired, {
        subject: 'name',
      }),
    ] as ValidationProblem[];
  }

  if (!config.type) {
    problems = [
      ...problems,
      getValidationProblemLabel(Condition.IsRequired, {
        subject: 'name',
      }),
    ] as ValidationProblem[];
  }

  // TODO: Add more checks here

  return problems;
};
