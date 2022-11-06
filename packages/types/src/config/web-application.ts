import { ViteBuildOptions } from '../build/vite';
import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentOptions } from '../environment';
import { ProjectType } from '../project';
import { RunOptions } from '../run';
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
  readonly port?: number;
  readonly publicDir?: string;
  readonly pwa?: boolean;
  readonly react?: boolean;
  readonly ssr?: boolean;
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

export type WebApplicationProjectConfig = Omit<ProjectConfig, 'type'> & {
  readonly build?: ViteBuildOptions | readonly ViteBuildOptions[];
  readonly development?: DevelopmentEnvironmentOptions & {
    readonly run?: RunOptions<WebApplicationOptions>;
  };
  readonly documentation?: WebApplicationDocumentationConfig;
  readonly type: ProjectType.WebApplication;
};
