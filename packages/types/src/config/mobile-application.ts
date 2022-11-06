import { ReactElement } from 'react';

import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentOptions } from '../environment';
import { MobilePlatform } from '../platform';
import { ProjectType } from '../project';
import { RunOptions } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';

export type MobileApplicationOptions = {
  readonly platforms?: readonly MobilePlatform[];
};

export type MobileApplicationDocumentationConfig = DocumentationConfig & {
  readonly features?: { readonly [key: string]: ReactElement | string };
  readonly type: DocumentationType.MobileApplication;
};

export type MobileApplicationConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentOptions & {
    readonly run?: RunOptions<MobileApplicationOptions>;
  };
  readonly documentation?: MobileApplicationDocumentationConfig;
  readonly type: ProjectType.MobileApplication;
};
