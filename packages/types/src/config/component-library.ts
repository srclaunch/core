import { DocumentationType } from '../documentation';
import { ComponentSpec } from '../documentation/component';
import {
  DevelopmentEnvironmentConfig,
  EnvironmentConfig,
} from '../environment';
import { ProjectType } from '../project';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type ComponentLibraryDocumentationConfig = DocumentationConfig & {
  readonly components?: ReadonlyArray<ComponentSpec>;
  readonly type?: DocumentationType.ComponentLibrary;
};

export type ComponentLibraryConfig = ProjectConfig & {
  readonly documentation?: ComponentLibraryDocumentationConfig;
  readonly environments?: EnvironmentConfig & {
    readonly development?: DevelopmentEnvironmentConfig<WebApplicationOptions>;
  };
  readonly type: ProjectType.ComponentLibrary;
};
