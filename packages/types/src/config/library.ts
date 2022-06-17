import { ProjectType } from '../project';
import { ProjectConfig } from '.';

export type LibraryConfig = ProjectConfig & {
  readonly type: ProjectType.Library;
};
