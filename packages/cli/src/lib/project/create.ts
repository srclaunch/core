import { ProjectType } from '@srclaunch/types';
import pc from 'picocolors';

import {
  promptForProjectCreate,
  promptForProjectDescription,
  promptForProjectName,
  promptForProjectType,
} from '../../prompts/generators/srclaunch/project';

export async function createNewProjectInteractive({
  name,
  description,
  type,
}: {
  readonly description?: string;
  readonly name?: string;
  readonly type?: ProjectType | string;
}) {
  const createProject = await promptForProjectCreate();

  if (createProject) {
    const projectName = name ?? (await promptForProjectName());
    const projectDescription =
      description ?? (await promptForProjectDescription());

    if (type && !Object.values(ProjectType).includes(type as ProjectType)) {
      console.error(
        `${pc.red('✖')} ${pc.red('Invalid project type')} ${pc.red(type)}`,
      );

      process.exit(1);
    }

    const projectType = type ?? (await promptForProjectType());
  }
}
