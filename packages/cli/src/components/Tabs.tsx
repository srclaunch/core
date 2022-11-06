import { Box, BoxProps, Text, useFocus, useFocusManager, useInput } from 'ink';
import {
  Children,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react';

import Button from './Button';

type TabsProps = PropsWithChildren<BoxProps & { readonly title?: string }>;

export const Tabs = ({ children, title, ...props }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // @ts-ignore
    React.Children.forEach(children, (child: typeof Tab, index) => {
      // @ts-ignore
      if (child?.props?.initial) {
        setActiveTab(index);
      }
    });
  }, [children]);

  return (
    <Box flexGrow={1} flexDirection="column" {...props}>
      {/* Tab navigation */}
      <Box flexDirection="row" height={1}>
        <Box paddingLeft={1} flexGrow={1}>
          {/* @ts-ignore */}
          {React.Children.map(children, (child: typeof Tab, index) => {
            return (
              <Box marginRight={2}>
                <Button
                  onSelect={() => setActiveTab(index)}
                  // @ts-ignore
                  label={child?.props?.label}
                  // @ts-ignore
                  status={child?.props?.status}
                />
              </Box>
            );
          })}
        </Box>

        {title && (
          <Box alignItems="flex-end" paddingRight={1}>
            <Text>{title}</Text>
          </Box>
        )}
      </Box>

      {/* Tab content */}
      <Box flexGrow={1} flexDirection="column" padding={1} width="100%">
        {/* @ts-ignore */}
        {React.Children.map(children, (child1: typeof Tab, index) => {
          return (
            <Box
              display={activeTab === index ? 'flex' : 'none'}
              flexDirection={'column'}
            >
              {Children.map(child1, child2 => {
                return <>{child2}</>;
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

type TabProps = PropsWithChildren<{
  readonly initial?: boolean;
  readonly label: string;
  readonly status?: string;
}>;

export const Tab = ({ children }: TabProps): ReactElement => {
  return <>{children}</>;
};
