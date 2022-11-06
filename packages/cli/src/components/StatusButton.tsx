import { Box, Text, useFocus, useFocusManager, useInput } from 'ink';
import { ReactElement, useEffect } from 'react';

import { RunStatus } from '../containers/DevelopmentContainer';
import Button, { ButtonProps } from './Button';
import { StatusOrb } from './StatusOrb';

type StatusButtonProps = ButtonProps & {
  readonly status?: RunStatus;
};

const StatusButton = ({ label, status, ...props }: StatusButtonProps) => {
  return (
    <Button
      label={
        <>
          <StatusOrb status={status} /> {label} ({status})
        </>
      }
      {...props}
    />
  );
};

export default StatusButton;
