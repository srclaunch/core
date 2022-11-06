import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentOptions } from '../environment';
import { ProjectType } from '../project';
import { RunOptions } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';
import { WebApplicationOptions } from './web-application';

export type LibraryDocumentationOptions = DocumentationConfig & {
  readonly classes?: {
    readonly [key: string]: {
      readonly description?: string;
      readonly methods?: { readonly [key: string]: string };
      readonly name?: string;
      readonly properties?: { readonly [key: string]: string };
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
  readonly type: DocumentationType.Library;
  readonly types?: {
    readonly [key: string]: {
      readonly description?: string;
      readonly methods?: { readonly [key: string]: string };
      readonly name?: string;
      readonly properties?: { readonly [key: string]: string };
    };
  };
};

export type LibraryConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentOptions & {
    readonly run?: RunOptions<WebApplicationOptions>;
  };
  readonly documentation?: LibraryDocumentationOptions;
  readonly type: ProjectType.Library;
};
