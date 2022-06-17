import { ProjectType } from '../project';
import { ProjectConfig } from '.';
import { WebAppOptions } from './web-application';

export type IconLibraryConfig = ProjectConfig & {
  readonly docs?: WebAppOptions;
  readonly type: ProjectType.IconLibrary;
};
