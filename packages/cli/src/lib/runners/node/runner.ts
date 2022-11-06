import { EnvironmentType } from '@srclaunch/types';
import pc from 'picocolors';

import { Process } from '../../process';

interface NodeRunnerOptions {
  readonly environment?: EnvironmentType;
  readonly script: string;
}

export class NodeRunner {
  private readonly environment?: EnvironmentType;
  private readonly script?: string;
  // eslint-disable-next-line functional/prefer-readonly-type
  private process?: Process;
  // eslint-disable-next-line functional/prefer-readonly-type
  private invoked = false;

  public constructor({ script, environment }: NodeRunnerOptions) {
    this.script = script;
    this.environment = environment;

    if (!this.script) {
      throw new Error('No input provided');
    }

    this.process = new Process(`node ${this.script}`, {
      NODE_ENV: this.environment,
    });
    // Now we can run a script and invoke a callback when complete, e.g.
  }

  public async run() {
    this.process?.run();

    this.process?.on('error', error => {
      if (this.invoked) return;
      this.invoked = true;

      console.error(pc.red(error));
    });

    this.process?.on('data', data => {
      console.log(data);
    });

    this.process?.on('close', () => {
      console.log(pc.green('Process exited'));
    });
  }
}
