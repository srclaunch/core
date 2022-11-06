/* eslint-disable functional/prefer-readonly-type */
import {
  DevelopmentEnvironmentOptions,
  EnvironmentOptions,
  EnvironmentType,
  WebApplicationOptions,
} from '@srclaunch/types';
import {} from '@srclaunch/types';
import react from '@vitejs/plugin-react';
import { RequestListener } from 'node:http';
import path from 'node:path';
import pc from 'picocolors';
import { createServer, InlineConfig, PluginOption, ViteDevServer } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import { Process } from '../../process';

export const getVitePlugins = ({
  react: reactApp,
  pwa,
  styledComponents,
}: {
  readonly pwa?: boolean;
  readonly react?: boolean;
  readonly styledComponents?: boolean;
}): readonly PluginOption[] => {
  let plugins: PluginOption[] = [];

  if (reactApp && styledComponents) {
    plugins = [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }) as PluginOption,
    ];
  } else if (reactApp && !styledComponents) {
    plugins = [react() as PluginOption];
  }

  if (pwa) {
    plugins = [...plugins, VitePWA()];
  }
  return plugins;
};

interface WebApplicationRunnerOptions extends WebApplicationOptions {
  readonly environment?: EnvironmentType;
}

export class WebApplicationRunner {
  private readonly environment?: EnvironmentType;

  // eslint-disable-next-line functional/prefer-readonly-type
  private process?: Process;
  // eslint-disable-next-line functional/prefer-readonly-type
  private invoked = false;

  public constructor(props: WebApplicationRunnerOptions) {
    const { environment } = props;

    this.environment = environment;

    // if (!this.script) {
    //   throw new Error('No input provided');
    // }

    this.process = new Process('node ./vite', {});
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
