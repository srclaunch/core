import { Text } from 'ink';

import { RunStatus } from '../containers/DevelopmentContainer';

type StatusOrbProps = {
  readonly status?: RunStatus;
};

export const StatusOrb = ({ status }: StatusOrbProps) => {
  const getStatusOrbColor = () => {
    switch (status) {
      case RunStatus.Running:
        return `#82d800`;
      case RunStatus.Starting:
        return `#ffcc00`;
      case RunStatus.Error:
      case RunStatus.Stopped:
        return `#cc5222`;
      case RunStatus.Idle:
      default:
        return `#aaaaaa`;
    }
  };

  return <Text color={getStatusOrbColor()}>{'● '}</Text>;
};
