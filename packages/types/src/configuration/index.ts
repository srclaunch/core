import { Project } from '../project';
import { Workspace } from '../workspace';

export type SrcLaunchConfig = Project | Workspace;

export type SrcLaunchConfigFile = {
  name: '.srclaunchrc' | 'srclaunch.config';
  extension?:
    | 'ts'
    | 'mts'
    | 'cts'
    | 'js'
    | 'mjs'
    | 'cjs'
    | 'json'
    | 'yaml'
    | 'yml';
};
