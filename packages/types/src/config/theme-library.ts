import { DocumentationType } from '../documentation';
import { ComponentSpec } from '../documentation/component';
import { DevelopmentEnvironmentOptions } from '../environment';
import { ProjectType } from '../project';
import { RunOptions } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type ThemeLibraryDocumentationConfig = DocumentationConfig & {
  readonly themes?: ReadonlyArray<ComponentSpec>;
  readonly type: DocumentationType.ThemeLibrary;
};

export type ThemeLibraryConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentOptions & {
    readonly run?: RunOptions<WebApplicationOptions>;
  };
  readonly documentation?: ThemeLibraryDocumentationConfig;
  readonly type: ProjectType.ThemeLibrary;
};
