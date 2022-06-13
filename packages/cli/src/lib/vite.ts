import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export const getVitePlugins = ({
  react: reactApp,
  pwa,
  styledComponents,
}: {
  readonly react?: boolean;
  readonly pwa?: boolean;
  readonly styledComponents?: boolean;
}): readonly PluginOption[] => {
  let plugins: PluginOption[] = [];

  if (reactApp) {
    plugins = styledComponents
      ? react({
          babel: {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  displayName: true,
                  fileName: false,
                },
              ],
            ],
          },
        })
      : react();
  }
  if (pwa) {
    plugins = [...plugins, VitePWA()];
  }

  return plugins;
};
