import { GitHubAction, GitHubActions } from '../../types';

export class Checkout extends GitHubAction<undefined> {
  public override readonly id = 'checkout';
  public override readonly description = 'Checkout';
  public override readonly uses = GitHubActions.Checkout;
}
