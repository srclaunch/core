import { Action } from '../../../../lib/class';

export interface YarnPublishOptions {
  readonly authToken?: string;
  readonly scope?: string;
}

export class YarnPublish extends Action<YarnPublishOptions> {
  public override readonly id = 'yarn-publish';
  public override readonly description = 'Publish to Yarn';
  public override readonly shell = {
    publish: 'yarn npm publish',
  };

  public constructor(input: YarnPublishOptions) {
    super(input);

    //     return writeFile({
    //       contents: scope
    //         ? `npmScopes:
    // ${scope}:
    //   npmRegistryServer: https://registry.npmjs.org
    //   npmAlwaysAuth: true
    //   npmAuthToken: ${authToken}`
    //         : `npmRegistryServer: https://registry.npmjs.org
    //   npmAlwaysAuth: true
    //   npmAuthToken: ${authToken}`,
    //       path: './.yarnrc.yml',
    //     });
  }
}
