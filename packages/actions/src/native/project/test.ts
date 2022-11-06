import { Action } from '../../lib/class';

export class RunTests extends Action {
  public override readonly name = 'test';
  public override readonly description = 'Runs tests';
  public override readonly shell = {
    test: 'srclaunch test',
  };
}

export class CollectTestCoverage extends Action {
  public override readonly name = 'Collect test coverage';
  public override readonly description = 'Collects test coverage';
  public override readonly shell = {
    test: 'srclaunch coverage',
  };
}
