import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentConfig } from '../environment';
import { ProjectType } from '../project';
import { RunConfig } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type LibraryDocumentationConfig = DocumentationConfig & {
  readonly classes?: {
    readonly [key: string]: {
      readonly description?: string;
      readonly name?: string;
      readonly properties?: { readonly [key: string]: string };
      readonly methods?: { readonly [key: string]: string };
    };
  };
  readonly functions?: {
    readonly [key: string]: {
      readonly description?: string;
      readonly name?: string;
      readonly parameters?: { readonly [key: string]: string };
      readonly returnType?: string;
    };
  };
  readonly types?: {
    readonly [key: string]: {
      readonly description?: string;
      readonly name?: string;
      readonly properties?: { readonly [key: string]: string };
      readonly methods?: { readonly [key: string]: string };
    };
  };
  readonly type: DocumentationType.Library;
};

export type LibraryConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentConfig & {
    readonly run?: RunConfig<WebApplicationOptions>;
  };
  readonly documentation?: LibraryDocumentationConfig;
  readonly type: ProjectType.Library;
};
