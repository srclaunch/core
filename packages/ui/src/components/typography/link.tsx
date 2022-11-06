import { WebLink } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { StateProps, TextColor } from '../../types';
import { TextDecorationPosition } from '../../types/typography';
import { Text, TextProps } from './text';

export type LinkProps = StateProps<TextProps & WebLink> & TextProps & WebLink;

export const Link = memo(
  ({
    children,
    textColor = TextColor.Link,
    textDecorationPosition = TextDecorationPosition.Underline,
    to,
    ...props
  }: LinkProps): ReactElement => {
    return (
      <RouterLink
        to={to}
        style={{
          outline: 'none',
        }}
      >
        <Text
          textDecorationPosition={textDecorationPosition}
          textColor={textColor}
          {...props}
        >
          {children}
        </Text>
      </RouterLink>
    );
  },
);
