import { Action } from '../../lib/class';

export class BuildProject extends Action {
  public override readonly name = 'build-project';
  public override readonly description = 'Builds project';
  public override readonly shell = {
    build: 'srclaunch build',
  };
}

export class BuildProjectDocs extends Action {
  public override readonly name = 'build-project-docs';
  public override readonly description = 'Builds project documentation';
  public override readonly shell = {
    build: 'srclaunch build --docs',
  };
}
