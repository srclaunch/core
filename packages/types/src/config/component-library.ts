import { DocumentationType } from '../documentation';
import { ComponentSpec } from '../documentation/component';
import {
  DevelopmentEnvironmentOptions,
  EnvironmentOptions,
} from '../environment';
import { ProjectType } from '../project';
import { Route } from '../routing';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type ComponentLibraryDocumentationConfig = DocumentationConfig & {
  readonly components?: ReadonlyArray<Partial<ComponentSpec>>;
  readonly routes?: ReadonlyArray<Route>;
  readonly type?: DocumentationType.ComponentLibrary;
};

export type ComponentLibraryConfig = ProjectConfig & {
  readonly documentation?: ComponentLibraryDocumentationConfig;
  readonly environments?: EnvironmentOptions & {
    readonly development?: DevelopmentEnvironmentOptions<WebApplicationOptions>;
  };
  readonly type: ProjectType.ComponentLibrary;
};
