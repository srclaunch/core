import { Action } from '@srclaunch/types';

export class GitCheckout extends Action {
  public override readonly name = 'Git checkout';
  public override readonly description = 'Checkout a branch';
  public override readonly shell = {
    checkout: 'git checkout',
  };
}
