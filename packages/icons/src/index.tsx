import React, { MemoExoticComponent, ReactElement } from 'react';

import * as BasicIcons from './iconsets/basic/index';
import * as DualLightIcons from './iconsets/dual-light/index';

export type Icons = BasicIcons.BasicIcons | DualLightIcons.DualLightIcons;

export const getIcon = async (
  name: BasicIcons.BasicIcons | DualLightIcons.DualLightIcons,
): Promise<ReactElement | void> => {
  const iconset = name.split('/')[0];
  const iconName = name.split('/')[1] as string;

  switch (iconset) {
    case 'basic': {
      // @ts-ignore
      return BasicIcons[iconName] as ReactElement;
    }
    case 'dual-light': {
      // @ts-ignore
      return DualLightIcons[iconName] as ReactElement;
      // const module = await import(
      //   `./iconsets/dual-light/${name.split('/')[1]}`
      // );
      // return module[name.split('/')[1] as string];
    }
  }
  // @ts-ignore
  return BasicIcons[iconName];
};

export { BasicIcons } from './iconsets/basic/index';
export { DualLightIcons } from './iconsets/dual-light/index';
