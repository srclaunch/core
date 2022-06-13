import { Action } from '@srclaunch/types';

export class EnableCorepack extends Action<null | undefined> {
  public override readonly name = 'Enable corepack';
  public override readonly description = 'Set environment variable';
  public override readonly shell = {
    enable: 'corepack enable',
  };
}
