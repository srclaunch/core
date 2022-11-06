import { ProjectConfig, ProjectType, WorkspaceConfig } from '@srclaunch/types';
import { globby } from 'globby';
import { Box, Newline, Spacer, Static, Text, useInput } from 'ink';
import { Flag, FlagType, TypedFlags } from 'meow';
import path from 'node:path/win32';
import { Worker } from 'node:worker_threads';
import { useEffect, useState } from 'react';
// import { Tab, Tabs } from './Tabs';
import { loadConfig } from 'unconfig';
import { Package } from 'update-notifier';

import Button from '../components/Button';
// import MultiSelect from 'ink-multi-select';
// import { getAppLabMetadata } from '../applab';
// import { startThread } from '../worker-thread';
import { FullScreen } from '../components/FullScreen';
import { Scrollable } from '../components/Scrollable';
import StatusButton from '../components/StatusButton';
import { Tab, Tabs } from '../components/Tabs';
import { loadSrcLaunchConfig } from '../lib/config';
import { runProject } from '../lib/runners';
import { Build } from '../pages/Build';
import { Changes } from '../pages/Changes';
import { Overview } from '../pages/Overview';
import { Release } from '../pages/Release';
import { Tests } from '../pages/Tests';
import { AppContainer } from './AppContainer';

type AppContainerProps<T = Record<string, Flag<FlagType, unknown>>> =
  React.PropsWithChildren<{
    readonly config: WorkspaceConfig & {
      readonly package: Package;
    };
    readonly initialTab?: string;
  }>;

export enum RunStatus {
  Error = 'error',
  Idle = 'idle',
  Running = 'running',
  Starting = 'starting',
  Stopped = 'stopped',
}

type RunnableProject = {
  readonly config: ProjectConfig;
  readonly name: string;
  readonly path: string;
  // eslint-disable-next-line functional/prefer-readonly-type
  status?: RunStatus;
};
export const DevelopmentContainer = ({
  children,
  config,
  initialTab = 'Overview',
}: AppContainerProps) => {
  const [mainOutput, setMainOutput] = useState<string[]>([]);
  const [serviceStatus, setServiceStatus] = useState<string | undefined>();
  const [runnableApps, setRunnableApps] = useState<Array<RunnableProject>>([]);
  const [runnableServices, setRunnableServices] = useState<
    Array<RunnableProject>
  >([]);
  const coreApiStatus = RunStatus.Idle;

  // useInput(async (input, key) => {
  //   if (input === 'q') {
  //     addToLogs('Quitting');

  //     throw new Error('Quitting');
  //     // Exit program
  //   }

  //   // if (input === "r") {
  //   //   console.info("Restarting");
  //   //   await restart();
  //   //   process.exit(0);
  //   //   // Exit program
  //   // }

  //   if (key.leftArrow) {
  //     // Left arrow key pressed
  //   }
  // });

  const addToLogs = (string_: string) => {
    setMainOutput(currentState => [...currentState, string_]);
  };

  // useInput(async (input, key) => {
  //   if (input === 'q') {
  //     addToLogs('Quitting');

  //     throw new Error('Quitting');
  //     // Exit program
  //   }

  //   // if (input === "r") {
  //   //   console.info("Restarting");
  //   //   await restart();
  //   //   process.exit(0);
  //   //   // Exit program
  //   // }

  //   if (key.leftArrow) {
  //     // Left arrow key pressed
  //   }
  // });

  // useEffect(() => {
  //   setMainScrollCursor(m => (m += 1));
  // }, [mainOutput.length]);

  const start = async () => {
    // if (config.sdk.coreApi) {
    //   const nodeRunner = new NodeRunner({
    //     script: `${config.sdk.coreApi.path}/dist/index.esm.js`,
    //   });
    //   const result = await nodeRunner.run();
    //   console.log(result);
    // }

    const apps = await globby('apps/*/.srclaunchrc.ts', {
      absolute: true,
      cwd: process.cwd(),
    });

    for (const app of apps) {
      const appConfig = (await loadSrcLaunchConfig(
        app.replace('/.srclaunchrc.ts', ''),
      )) as ProjectConfig;

      setRunnableApps(currentState => [
        ...currentState,
        {
          config: appConfig,
          name: appConfig.name,
          path: app.replace('/.srclaunchrc.ts', ''),
          status: RunStatus.Idle,
        },
      ]);

      addToLogs(`Loaded ${appConfig.name}`);
      // if (appConfig.type === 'web-app') {
      //   setRunnableApps(currentState => [
      //     ...currentState,
      //     {
      //       config: appConfig,
      //       name: appConfig.name,
      //       path: path.dirname(app),
      //     },
      //   ]);
      // }
    }
    const services = await globby('services/*/.srclaunchrc.ts', {
      absolute: true,
      cwd: process.cwd(),
    });

    for (const service of services) {
      const serviceConfig = (await loadSrcLaunchConfig(
        service.replace('/.srclaunchrc.ts', ''),
      )) as ProjectConfig;

      setRunnableServices(currentState => [
        ...currentState,
        {
          config: serviceConfig,
          name: serviceConfig.name,
          path: service.replace('/.srclaunchrc.ts', ''),
          status: RunStatus.Idle,
        },
      ]);

      addToLogs(`Loaded ${serviceConfig.name}`);
    }

    const packages = await globby('packages/*/.srclaunchrc.ts', {
      absolute: true,
      cwd: process.cwd(),
    });

    // addToLogs('Initializing services...');
    //
    // const { name, type } = await getAppLabMetadata();
    //
    // setServiceStatus('starting');
    // addToLogs(`Starting service ${name}...`);
    //
    // const thread: Worker = await startThread({
    //   name,
    //   type,
    // });
    //
    // thread.on('online', () => {
    //   addToLogs(`${name} worker online`);
    // });
    //
    // thread.on('message', (message: string) => {
    //   addToLogs(message);
    // });
    //
    // thread.on('error', async (err: Error) => {
    //   addToLogs(`ERROR: ${err.name}: ${err.message}`);
    //
    //   setServiceStatus('error');
    // });
    //
    // thread.on('exit', async () => {
    //   setServiceStatus('error');
    // });
    //
    // setServiceStatus('started');
    // addToLogs(`Service ${name} started`);

    if (serviceStatus) {
      addToLogs(serviceStatus);
    }
  };

  useEffect(() => {
    addToLogs(`SrcLaunch CLI v${config?.package.version}`);

    start();
  }, []);

  const run = async (project: RunnableProject) => {
    const result = await runProject({ config: project.config });

    return true;
  };

  return (
    <AppContainer>
      <Tabs>
        <Tab initial label="Overview">
          <Box flexGrow={1} flexDirection="column">
            <Box marginBottom={1}>
              <StatusButton
                label="Core API"
                status={coreApiStatus}
                onSelect={() => {}}
              />
            </Box>

            <Box flexDirection="column" marginBottom={1}>
              <Box>
                <Text>Apps</Text>
              </Box>
              <Box>
                {runnableApps.length > 0 ? (
                  runnableApps.map((app, index) => (
                    <StatusButton
                      key={app.name}
                      label={app.name}
                      status={app.status}
                      onSelect={async () => {
                        setRunnableApps(currentState => {
                          const newState = [...currentState];
                          const appToRun = newState[index];

                          if (!appToRun) {
                            return currentState;
                          }

                          switch (appToRun.status) {
                            case RunStatus.Idle: {
                              run(app);
                              appToRun.status = RunStatus.Starting;

                              break;
                            }
                            case RunStatus.Starting: {
                              appToRun.status = RunStatus.Stopped;

                              break;
                            }
                            case RunStatus.Running: {
                              appToRun.status = RunStatus.Stopped;

                              break;
                            }
                            case RunStatus.Stopped: {
                              appToRun.status = RunStatus.Starting;

                              break;
                            }
                            // No default
                          }

                          newState[index] = appToRun;

                          return newState;
                        });
                      }}
                    />
                  ))
                ) : (
                  <Text color="blackBright">No apps found</Text>
                )}
              </Box>
            </Box>

            <Box flexDirection="column">
              <Box>
                <Text>Services</Text>
              </Box>
              <Box>
                {runnableServices.length > 0 ? (
                  runnableServices.map(service => (
                    <StatusButton
                      key={service.name}
                      label={service.name}
                      status={service.status}
                    />
                  ))
                ) : (
                  <Text color="blackBright">No services found</Text>
                )}
              </Box>
            </Box>
          </Box>
        </Tab>
        <Tab label="Logs">
          <Box
            borderStyle="round"
            borderColor="blue"
            flexDirection="column"
            flexGrow={1}
            // padding={1}
            paddingLeft={1}
          >
            <Scrollable items={mainOutput} />
            {/* <Box flexDirection="column" flexGrow={1}>
                <Text>
                  Logs
                  {/* items.length: {items.length} - lineCount: {lineCount} }
                </Text>
                {
                mainOutput.map((line, index) => (
                  <Text key={index}>{line}</Text>
                ))
                }
              </Box> */}
          </Box>
        </Tab>
        <Tab label="Settings"></Tab>
        {/* <Tab initial={initialTab === 'Build'} label="Build">
          <Build />
        </Tab>
        <Tab initial={initialTab === 'Tests'} label="Tests">
          <Tests />
        </Tab>
        <Tab initial={initialTab === 'Changes'} label="Changes">
          <Changes />
        </Tab>
        <Tab initial={initialTab === 'Release'} label="Release">
          <Release />
        </Tab>  */}
      </Tabs>
    </AppContainer>
  );
};
