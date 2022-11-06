import { DocumentationType } from '../documentation';
import { ComponentSpec } from '../documentation/component';
import { DevelopmentEnvironmentOptions } from '../environment';
import { ProjectType } from '../project';
import { RunOptions } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type IconLibraryDocumentationConfig = DocumentationConfig & {
  readonly icons?: ReadonlyArray<ComponentSpec>;
  readonly type: DocumentationType.IconLibrary;
};

export type IconLibraryConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentOptions & {
    readonly run?: RunOptions<WebApplicationOptions>;
  };
  readonly documentation?: IconLibraryDocumentationConfig;
  readonly type: ProjectType.IconLibrary;
};
