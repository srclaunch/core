import { NotificationType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  Color,
  ContainerProps,
  Orientation,
  Size,
  TextColor,
  TextWeight,
} from '../../types';
import { Container } from '../layout/container';
import { Label } from '../typography/label';
import { TextProps } from '../typography/text';
import { Orb } from './orb';

export type NotificationLabelProps = ContainerProps<
  TextProps & {
    readonly label?: string;
    readonly showOrb?: boolean;
    readonly type?: NotificationType;
  }
>;

export const NotificationLabel = memo(
  ({
    backgroundColor = BackgroundColor.Light,
    borderRadius = Amount.All,
    children,
    className = '',
    label = '',
    padding = Amount.Less,
    showOrb = true,
    type,
    ...props
  }: NotificationLabelProps): ReactElement => {
    const getBackgroundColor = () => {
      if (!type) return backgroundColor;

      switch (type) {
        case NotificationType.Error:
          return Color.Error;
        case NotificationType.Info:
          return Color.Info;
        case NotificationType.Success:
          return Color.Success;
        case NotificationType.Warning:
          return Color.Warning;
      }
    };

    const getTextColor = () => {
      if (!type) return TextColor.Default;

      switch (type) {
        case NotificationType.Error:
          return TextColor.Error;
        case NotificationType.Info:
          return TextColor.Info;
        case NotificationType.Success:
          return TextColor.Success;
        case NotificationType.Warning:
          return TextColor.Warning;
      }
    };

    const bgColor = getBackgroundColor();
    const textColor = getTextColor();

    return (
      <Container
        alignHorizontal={AlignHorizontal.Center}
        alignVertical={AlignVertical.Center}
        orientation={Orientation.Horizontal}
        backgroundColor={backgroundColor}
        backgroundColorOpacity={type ? 10 : 100}
        borderRadius={borderRadius}
        className={`${className} notification-label`}
        // depth={!type ? Depth.Low : undefined}
        padding={padding}
        {...props}
      >
        {showOrb && <Orb backgroundColor={bgColor} marginRight={Amount.Less} />}

        {label && (
          <Label
            textColor={textColor}
            lineHeight={Size.Small}
            textWeight={TextWeight.Default}
          >
            {label}
          </Label>
        )}

        {children}
      </Container>
    );
  },
);
