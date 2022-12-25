import { Environment, EnvironmentType } from '@srclaunch/types';
// COmment for deploy
const developmentEnvironment: Environment = {
  description: 'Development environment',
  id: 'dev',
  name: 'Development',
  type: EnvironmentType.Development,
};

const testEnvironment: Environment = {
  description: 'Quality Assurance/testing environment',
  id: 'qa',
  name: 'QA',
  type: EnvironmentType.CI,
};

const previewEnvironment: Environment = {
  description: 'Preview environment',
  id: 'preview',
  name: 'Preview',
  type: EnvironmentType.Production,
};

const productionEnvironment: Environment = {
  description: 'Production environment',
  id: 'production',
  name: 'Production',
  type: EnvironmentType.Production,
};

export function getEnvironment() {
  if (window) {
    const hostname = window.location.hostname;

    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
      return developmentEnvironment;
    }

    if (hostname.includes('test')) {
      return testEnvironment;
    }

    if (hostname.includes('preview')) {
      return previewEnvironment;
    }
  }

  return productionEnvironment;
}
