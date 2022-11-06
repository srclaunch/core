import { Action } from '../../lib/class';

export class GitCheckout extends Action {
  public override readonly name = 'Git checkout';
  public override readonly description = 'Checkout a branch';
  public override readonly shell = {
    checkout: 'git checkout',
  };
}
