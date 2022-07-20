import React, { MemoExoticComponent, ReactElement } from 'react';

import { BasicIcons } from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';

export type Icons = BasicIcons | DualLightIcons;

export const getIcon = async (
  name: BasicIcons | DualLightIcons,
): Promise<MemoExoticComponent<React.ElementType> | undefined> => {
  const iconset = name.split('/')[0];
  const iconName = name.split('/')[1] as string;

  switch (iconset) {
    case 'basic': {
      const module = await import('./iconsets/basic/index.js');
      return module[iconName] as MemoExoticComponent<React.ElementType>;
    }
    case 'dual-light': {
      const module = await import(
        `./iconsets/dual-light/${name.split('/')[1]}.js`
      );
      return module[name.split('/')[1] as string];
    }
  }
};

export { BasicIcons } from './iconsets/basic/index';
export { DualLightIcons } from './iconsets/dual-light/index';
