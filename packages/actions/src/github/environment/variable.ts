import { GitHubAction } from '../../types';

export interface SetEnvironmentVariableOptions {
  readonly name?: string;
  readonly value?: boolean | number | string;
}
export class SetEnvironmentVariable extends GitHubAction<SetEnvironmentVariableOptions> {
  public override readonly id = 'set-environment-variable';
  public override readonly description = 'Set environment variable';

  public constructor({ name, value }: SetEnvironmentVariableOptions) {
    super({ name, value });

    this.shell = {
      echo: `echo "EOF" >> $GITHUB_ENV`,
      env: `echo "$${name}" >> $GITHUB_ENV`,
      eof: `echo "${name}<<EOF" >> $GITHUB_ENV`,
      set: `${name}=$(cat << EOF ${value} EOF)`,
    };
  }
}
