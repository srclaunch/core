import { transformObjectToYAML } from '@srclaunch/transform';

import { YarnNodeLinker } from '../../../types/config/package-manager/yarn';

export async function generateYarnConfig({
  nodeLinker,
}: {
  readonly nodeLinker?: YarnNodeLinker;
}): Promise<string> {
  const yarnRC = {
    nodeLinker: nodeLinker ?? YarnNodeLinker.NodeModules,
  };
  return transformObjectToYAML(yarnRC).toString();
}
