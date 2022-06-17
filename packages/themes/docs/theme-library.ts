// import { Exception } from '@srclaunch/exceptions';
import { ElementType } from 'react';

import { AppLabDarkTheme, AppLabLightTheme } from '../src/index';
import { IconGrid } from './components/IconGrid';
import { Icon, IconLibrary } from './types/icon';

const getComponents = async (iconSet: Record<string, string>) => {
  const entries = [
    ...Object.entries(iconSet),
    ...Object.entries(AppLabDarkTheme),
  ];

  let comps: Icon[] = [];
  for (const entry in entries) {
    const [name, icon] = entries[entry];

    const iconComponent = (await import(`../iconsets/${icon}.tsx`)) as Icon;

    const routeComponent = iconComponent[name] as ElementType;

    comps = [
      ...comps,
      {
        examples: [
          {
            title: 'Basic',
            // properties: {}
          },
        ],
        // @ts-ignore
        icon: routeComponent,

        name,

        path: `/${icon}`,

        title: name,
      },
    ];
  }

  return comps;
};
// )).slice(0, 5);
// console.log('entries', entries);

// let compos = [];

// for (const entry in  entries) {
//   console.log('entry', entry)
//   const name = entry[0];
//   const icon = entry[1];
//   // const comp = await entries.map(async () => {
//     console.log('name,', name);
//     console.log('icon,', icon);

//   //   // const component = await import(`./dual-light/$${name}`);
//   //   // @ts-ignore
//

//     compos = [ ...compos, {
//       component: compo.component ? compo : undefined,
//       title: name, // The name of the icon
//       // icon, // The icon itself
//       // description: icon.description, // The description of the icon
//       path: icon, // The path to the icon
//     }];
//   // });
// }

// return compos;
// };

// @ts-ignore
const basicIcons = await getComponents(BasicIcons);
// @ts-ignore
const dualLightIcons = await getComponents(DualLightIcons);

const exp = {
  description: 'A library of icons for AppLab applications',
  icons: [
    {
      description: 'Basic filled icons',
      icons: basicIcons,
      path: '/basic',
      title: 'Basic',
    },
    {
      description: 'Blue-ish dual tone icon set',
      icons: dualLightIcons,
      path: '/dual-light',
      title: 'Dual Light',
    },
  ],
  name: 'AppLab Icons',
} as IconLibrary;

export default exp;
