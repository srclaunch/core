import { engine, Logger, runner } from 'hygen';
import { RunnerResult } from 'hygen/dist/types';

export type CreatorArgs =
  | {
      readonly templates: string;
    }
  | undefined;

export class Creator {
  // eslint-disable-next-line functional/prefer-readonly-type
  protected templates?: string;
  // eslint-disable-next-line functional/prefer-readonly-type
  private runner?: RunnerResult;

  public constructor(args: CreatorArgs) {
    if (args) {
      const { templates } = args;
      console.log(templates);
      this.templates = templates;
    }
  }

  public async create() {
    this.runner = await runner([], {
      cwd: process.cwd(),
      logger: new Logger(console.log.bind(console)),
      templates: this.templates,
    });

    if (this.runner.failure) {
      throw new Error('Failed to create');
    } else if (this.runner.success) {
      console.log('success');
    }
  }
}
