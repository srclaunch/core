import { DocumentationType } from '../documentation';
import { ComponentSpec } from '../documentation/component';
import { DevelopmentEnvironmentConfig } from '../environment';
import { ProjectType } from '../project';
import { RunConfig } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type IconLibraryDocumentationConfig = DocumentationConfig & {
  readonly icons?: ReadonlyArray<ComponentSpec>;
  readonly type: DocumentationType.IconLibrary;
};

export type IconLibraryConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentConfig & {
    readonly run?: RunConfig<WebApplicationOptions>;
  };
  readonly documentation?: IconLibraryDocumentationConfig;
  readonly type: ProjectType.IconLibrary;
};
