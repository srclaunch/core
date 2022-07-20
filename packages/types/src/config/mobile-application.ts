import { ReactElement } from 'react';

import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentConfig } from '../environment';
import { MobilePlatform } from '../platform';
import { ProjectType } from '../project';
import { RunConfig } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';

export type MobileApplicationOptions = {
  readonly platforms?: readonly MobilePlatform[];
};

export type MobileApplicationDocumentationConfig = DocumentationConfig & {
  readonly features?: { readonly [key: string]: string | ReactElement };
  readonly type: DocumentationType.MobileApplication;
};

export type MobileApplicationConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentConfig & {
    readonly run?: RunConfig<MobileApplicationOptions>;
  };
  readonly documentation?: MobileApplicationDocumentationConfig;
  readonly type: ProjectType.MobileApplication;
};
