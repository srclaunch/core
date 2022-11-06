/* eslint-disable unicorn/prevent-abbreviations */
import { WorkspaceConfig } from '@srclaunch/types';
import chokidar from 'chokidar';
import fs from 'fs-extra';
import { globby } from 'globby';
import { render } from 'ink';
import { TypedFlags } from 'meow';
import { watch } from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import tsNodeDev from 'ts-node';
import { Package } from 'update-notifier';

import { AppContainer } from '../containers/AppContainer';
import { DevelopmentContainer } from '../containers/DevelopmentContainer';
import { Command, CommandType } from '../lib/command';
import { ComponentLibraryDocsGenerator } from '../lib/docs/generate';
import { InteractiveModeFlag, InteractiveModeFlagType } from '../lib/flags';

type DevelopmentFlags = TypedFlags<InteractiveModeFlagType>;

/*
           // await runVite({
            //   environment: Environments.Development,
            //   project: config,
            //   ...options,
            // });
          
            */

export default new Command<
  WorkspaceConfig & { readonly package: Package },
  DevelopmentFlags
>({
  description: 'Start development mode environment',
  name: 'dev',
  run: async ({ config, flags }) => {
    try {
      if (flags.interactive) {
        const { waitUntilExit } = render(
          <DevelopmentContainer config={config} />,
        );
        await waitUntilExit();
      }
    } catch (error: unknown) {
      console.error(error);
      process.exit(1);
    }
  },
  type: CommandType.Project,
});
