// import { Box, Newline, Spacer, Static, Text, useInput } from 'ink';
import { Flag, FlagType, TypedFlags } from 'meow';
import { Worker } from 'node:worker_threads';
import { PropsWithChildren, useEffect, useState } from 'react';

// import MultiSelect from 'ink-multi-select';
// import { getAppLabMetadata } from '../applab';
// import { startThread } from '../worker-thread';
import { FullScreen } from '../components/FullScreen';
import { Scrollable } from '../components/Scrollable';
import { Tab, Tabs } from '../components/Tabs';
import { Build } from '../pages/Build';
import { Changes } from '../pages/Changes';
import { Overview } from '../pages/Overview';
import { Release } from '../pages/Release';
import { Tests } from '../pages/Tests';
// import { Tab, Tabs } from './Tabs';

type AppContainerProps<T = Record<string, Flag<FlagType, unknown>>> =
  PropsWithChildren<{
    readonly cliVersion?: string;
  }>;

export const AppContainer = ({ children, cliVersion }: AppContainerProps) => {
  const [mainOutput, setMainOutput] = useState<string[]>([]);
  const [serviceStatus, setServiceStatus] = useState<string | undefined>();

  const addToLogs = (string_: string) => {
    setMainOutput(currentState => [...currentState, string_]);
  };

  // useEffect(() => {
  //   setMainScrollCursor(m => (m += 1));
  // }, [mainOutput.length]);

  useEffect(() => {
    const handleFlags = async () => {
      addToLogs(``);
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

    handleFlags();
  }, []);

  return (
    <FullScreen
      borderStyle="round"
      borderColor="lightgrey"
      flexDirection="column"
    >
      {/* 
      <Tabs>
       <Tab initial={initialTab === 'Overview'} label="Overview">
          <Overview />
        </Tab>
        <Tab initial={initialTab === 'Build'} label="Build">
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
        </Tab> 
      </Tabs>
      */}
      {/* <Box flexDirection="row">
        <Spacer />
        <Box alignItems="flex-end" paddingRight={1}>
          <Text>{cliVersion}</Text>
        </Box>
      </Box> */}
      {children}
    </FullScreen>
  );
};
