import { ViteBuildOptions } from '../build/vite';
import { ProjectType } from '../project';
import { Theme } from '../ui/theme';
import { ProjectConfig } from '.';

export type WebAppOptions = {
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
    readonly directory?: string;
    readonly file?: string;
  };
  readonly optimize?: {
    readonly exclude?: readonly string[];
    readonly include?: readonly string[];
  };
  readonly pwa?: boolean;
  readonly publicDir?: string;
  readonly ssr?: boolean;
  readonly react?: boolean;
  readonly styledComponents?: boolean;
  readonly ui?: {
    readonly themes?: {
      readonly custom?: readonly Theme[];
      readonly default?: Theme['id'];
    };
  };
};

export type WebAppConfig = ProjectConfig &
  WebAppOptions & {
    readonly build?: ViteBuildOptions | readonly ViteBuildOptions[];
    readonly type: ProjectType.WebApplication;
  };
