import { ProjectConfig, ProjectType } from '@srclaunch/types';
import prompts from 'prompts';

export async function promptForProjectOptions(): Promise<ProjectConfig> {
  const [name, description, type] = await Promise.all([
    promptForProjectName(),
    promptForProjectDescription(),
    promptForProjectType(),
  ]);

  return { description, name, type };
}

export async function promptForProjectCreate(): Promise<boolean> {
  return (
    await prompts({
      active: 'Yes',
      inactive: 'No',
      initial: true,
      message: 'Would you like to create a new SrcLaunch configuration file?',
      name: 'value',
      type: 'toggle',
    })
  ).value;
}

export async function promptForProjectName(): Promise<string> {
  return (
    await prompts({
      message: 'What do you want to name your project?',
      name: 'value',
      type: 'text',
      validate: value =>
        typeof value === 'string' &&
        value.length > 0 &&
        Boolean(
          /^(@[\da-z~-][\d._a-z~-]*\/)?[\da-z~-][\d._a-z~-]*$/.test(value),
        ),
    })
  ).value;
}

export async function promptForProjectDescription(): Promise<string> {
  return (
    await prompts({
      message: 'Write a brief description of your project.',
      name: 'value',
      type: 'text',
      validate: value => typeof value === 'string' && value.length > 0,
    })
  ).value;
}

export async function promptForProjectType(): Promise<ProjectType> {
  return (
    await prompts({
      choices: Object.values(ProjectType).map(type => ({
        title: type.replace('-', ' '),
        value: type as ProjectType,
      })),
      initial: 1,
      message: 'Choose a project type.',
      name: 'value',
      type: 'select',
    })
  ).value;
}
