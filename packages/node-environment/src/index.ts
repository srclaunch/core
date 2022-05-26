import { Environment, Environments, EnvironmentType } from '@srclaunch/types';

const devEnvironment: Environment = {
  description: 'Development environment',
  id: Environments.Development,
  name: 'Development',
  type: EnvironmentType.Development,
};

const testEnvironment: Environment = {
  description: 'Test environment',
  id: Environments.QA,
  name: 'Test',
  type: EnvironmentType.NonProduction,
};

const previewEnvironment: Environment = {
  description: 'Preview environment',
  id: Environments.Preview,
  name: 'Preview',
  type: EnvironmentType.NonProduction,
};

const productionEnvironment: Environment = {
  description: 'Production environment',
  id: Environments.Production,
  name: 'Production',
  type: EnvironmentType.Production,
};

export function getEnvironment(): Environment {
  const environment = process.env.NODE_ENV;

  switch (environment) {
    case 'dev':
    case 'development':
      return devEnvironment;
    case 'test':
      return testEnvironment;
    case 'preview':
      return previewEnvironment;
    case 'production':
      return productionEnvironment;
  }

  return productionEnvironment;
}
