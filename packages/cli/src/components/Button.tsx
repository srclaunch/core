import { Box, Text, useFocus, useFocusManager, useInput } from 'ink';
import { ReactElement, useEffect } from 'react';

import { RunStatus } from '../containers/DevelopmentContainer';

export type ButtonProps = {
  readonly backgroundColor?: string;
  readonly label: ReactElement | string;
  readonly onFocus?: () => unknown;
  readonly onSelect?: () => unknown;
  readonly textColor?: string;
};

const Button = ({
  backgroundColor,
  label,
  onSelect,
  onFocus,
  textColor,
}: ButtonProps) => {
  const { enableFocus, focusNext } = useFocusManager();
  const { isFocused } = useFocus({});

  useEffect(() => {
    if (isFocused && onFocus) onFocus();
  }, [isFocused, onFocus]);

  useEffect(() => {
    enableFocus();
  }, [enableFocus]);

  // useEffect(() => {
  //   if (isFocused) {
  //     focusNext();
  //   }
  // }, [isFocused, focusNext]);

  useInput(async (input, key) => {
    if (isFocused && key.return && onSelect) {
      onSelect();
    }
  });

  return (
    <Box height={1}>
      <Text
        backgroundColor={backgroundColor ?? isFocused ? 'yellow' : undefined}
        color={textColor ?? isFocused ? '#000000' : 'white'}
        // bold={isFocused}
      >
        {label}
      </Text>
    </Box>
  );
};

export default Button;
