import { ReactElement } from 'react';

import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentConfig } from '../environment';
import { DesktopPlatform } from '../platform';
import { ProjectType } from '../project';
import { RunConfig } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';

export type DesktopApplicationOptions = {
  readonly platforms?: readonly DesktopPlatform[];
};

export type DesktopApplicationDocumentationConfig = DocumentationConfig & {
  readonly features?: { readonly [key: string]: string | ReactElement };
  readonly type: DocumentationType.ComponentLibrary;
};

export type DesktopApplicationConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentConfig & {
    readonly run?: RunConfig<DesktopApplicationOptions>;
  };
  readonly documentation?: DesktopApplicationDocumentationConfig;
  readonly type: ProjectType.DesktopApplication;
};
