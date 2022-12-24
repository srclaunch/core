import { ComponentSpec, Route } from '@srclaunch/types';

import { Introduction } from '../pages/introduction';

export async function getRoutes(
  components: readonly Partial<ComponentSpec>[],
): Promise<readonly Route[]> {
  const routes: Route[] = [
    {
      component: Introduction,
      path: '/',
    },
  ];

  return routes;
}
