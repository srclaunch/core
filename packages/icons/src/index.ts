import { ComponentType, MemoExoticComponent, SVGProps } from 'react';

import { BasicIcons } from './iconsets/basic/index';
import * as Basic from './iconsets/basic/index';
import { DualLightIcons } from './iconsets/dual-light/index';
import * as DualLight from './iconsets/dual-light/index';

export type Icon = BasicIcons | DualLightIcons;

export function getIcon(
  name: BasicIcons | DualLightIcons,
): MemoExoticComponent<
  ComponentType<{ readonly props: SVGProps<SVGSVGElement> }>
> | null {
  const { BasicIcons: notUsedBasic, ...otherBasicIcons } = Basic;
  const { DualLightIcons: notUsedDualLight, ...otherDualLightIcons } =
    DualLight;
  const matchedIcon = [
    ...Object.entries(
      name.includes('basic/') ? { ...BasicIcons } : { ...DualLightIcons },
    ),
  ].find(([key, value]) => value === name);

  if (matchedIcon && matchedIcon[0]) {
    return (
      name.includes('basic/')
        ? otherBasicIcons[matchedIcon[0] as keyof typeof BasicIcons]
        : otherDualLightIcons[matchedIcon[0] as keyof typeof DualLightIcons]
    ) as MemoExoticComponent<
      ComponentType<{ readonly props: SVGProps<SVGSVGElement> }>
    >;
  }

  return null;
}
export { BasicIcons } from './iconsets/basic/index';
export * as Basic from './iconsets/basic/index';
export * as DualLight from './iconsets/dual-light/index';
export { DualLightIcons } from './iconsets/dual-light/index';
