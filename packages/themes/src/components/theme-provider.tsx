import { Theme } from '@srclaunch/types';
import {
  memo,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { createGlobalStyle } from 'styled-components';

import { AppLabLightTheme } from '../themes/applab-light';

type ThemeProviderProps = PropsWithChildren<{
  readonly className?: string;
  readonly theme?: Theme['id'];
  readonly themes?: readonly Theme[];
}>;

export const ThemeProvider = memo(
  ({
    className = '',
    children,
    theme,
    themes,
  }: ThemeProviderProps): ReactElement => {
    const [currentTheme, setTheme] = useState<Theme>(
      themes?.find(t => t.id === theme) ?? AppLabLightTheme,
    );

    useEffect(() => {
      if (theme && themes) {
        const match = themes.find(t => t.id === theme);

        if (match) {
          setTheme(match);
        } else {
          setTheme(AppLabLightTheme);
        }
      } else {
        setTheme(AppLabLightTheme);
      }
    }, [theme]);

    return (
      <div
        className={`${currentTheme.id} ${className} theme-provider`}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <GlobalStyle theme={currentTheme} />

        {/*<ThemeStyles />*/}

        {children}
      </div>
    );
  },
);

const GlobalStyle = createGlobalStyle<{
  readonly theme?: Theme;
}>`
  ${props => props.theme.css};

`;
