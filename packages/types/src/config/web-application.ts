import { ViteBuildOptions } from '../build/vite';
import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentConfig } from '../environment';
import { ProjectType } from '../project';
import { RunConfig } from '../run';
import { Theme } from '../ui/theme';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';

export type WebApplicationOptions = {
  readonly assetsDir?: string;
  readonly aws?: {
    readonly cognito?: {
      readonly identityPoolId?: string;
      readonly userPoolClientId?: string;
      readonly userPoolId?: string;
    };
    readonly region?: string;
  };
  readonly basePath?: string;
  readonly input?: {
    readonly directory: string;
    readonly file?: string;
    readonly files?: readonly string[];
  };
  readonly optimize?: {
    readonly exclude?: readonly string[];
    readonly include?: readonly string[];
  };

  readonly pagesDir?: string;
  readonly pwa?: boolean;
  readonly publicDir?: string;
  readonly ssr?: boolean;
  readonly react?: boolean;
  readonly styledComponents?: boolean;
  readonly ui?: {
    readonly theme?: Theme;
    readonly themes?: readonly Theme[];
  };
};

export type WebApplicationDocumentationConfig = DocumentationConfig & {
  readonly features?: { readonly [key: string]: string };
  readonly type: DocumentationType.WebApplication;
};

export type WebApplicationConfig = ProjectConfig &
  WebApplicationOptions & {
    readonly development?: DevelopmentEnvironmentConfig & {
      readonly run?: RunConfig<WebApplicationOptions>;
    };
    readonly documentation?: WebApplicationDocumentationConfig;
    readonly build?: ViteBuildOptions | readonly ViteBuildOptions[];
    readonly type: ProjectType.WebApplication;
  };
