import { ComponentSpec, Route } from '@srclaunch/types';

import { Introduction } from '../pages/introduction';

export function getRoutes(
  components: readonly Partial<ComponentSpec>[],
): readonly Route[] {
  return [
    {
      component: Introduction,
      path: '/',
    },
    ...(components.map(component => ({
      component: component.component,
      path: `/${component.docPath}`,
    })) as Route[]),
  ];
}
