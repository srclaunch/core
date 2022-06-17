import { ProjectType } from '../project';
import { ProjectConfig } from '.';
import { WebAppOptions } from './web-application';

export type ThemeLibraryConfig = ProjectConfig & {
  readonly docs?: WebAppOptions;
  readonly type: ProjectType.ThemeLibrary;
};
