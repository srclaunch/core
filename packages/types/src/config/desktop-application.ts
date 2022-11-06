import { ReactElement } from 'react';

import { DocumentationType } from '../documentation';
import { DevelopmentEnvironmentOptions } from '../environment';
import { DesktopPlatform } from '../platform';
import { ProjectType } from '../project';
import { RunOptions } from '../run';
import { ProjectConfig } from '.';
import { DocumentationConfig } from './documentation';

export type DesktopApplicationDocumentationOptions = DocumentationConfig & {
  readonly features?: { readonly [key: string]: ReactElement | string };
  readonly type: DocumentationType.ComponentLibrary;
};

export type DesktopApplicationConfig = ProjectConfig & {
  readonly development?: DevelopmentEnvironmentOptions & {
    readonly run?: RunOptions<DesktopApplicationConfig>;
  };
  readonly documentation?: DesktopApplicationDocumentationOptions;
  readonly platforms?: readonly DesktopPlatform[];
  readonly type: ProjectType.DesktopApplication;
};
