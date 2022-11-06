import { ChangesetConfig } from '@srclaunch/types';
// import { readFile, writeFile } from '@srclaunch/logic';
// import Yaml from 'js-yaml';
import path from 'node:path';
import standardVersion, { Options } from 'standard-version';

import { DEFAULT_COMMIT_TYPES } from '../../constants/releases';
// import { createChangeset } from '../changesets';
import { push } from '../git';

export async function createRelease({
  changesets,
  push: pushFlag = false,
}: {
  readonly changesets?: ChangesetConfig;
  readonly push?: boolean;
}) {
  // : Promise<{
  //   repo?: string;
  //   branch: string;
  //   version: string;
  // }>
  // https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md
  await standardVersion({
    infile: path.join(path.resolve(), 'CHANGELOG.md'),
    noVerify: true,
    silent: true,
    types: (changesets?.types ?? DEFAULT_COMMIT_TYPES) as Options['types'],
  });

  // const packageJson = await JSON.parse(
  //   (await readFile('./package.json')).toString(),
  // );
  // const branch = await getBranchName();

  if (pushFlag) {
    await push({ followTags: true });

    // return {
    //   repo: result.repo,
    //   branch,
    //   version: packageJson.version,
    // };
  }

  // return {
  //   branch,
  //   version: packageJson.version,
  // };
}
