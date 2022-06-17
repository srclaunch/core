import { ProjectType } from '../project';
import { ProjectConfig } from '.';
import { WebAppOptions } from './web-application';

export type ComponentLibraryConfig = ProjectConfig & {
  readonly docs?: WebAppOptions;
  readonly type: ProjectType.ComponentLibrary;
};
