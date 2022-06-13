import { Project } from '@srclaunch/types';

import { DEFAULT_SRCLAUNCH_CONFIG } from '../../../constants/config/srclaunch';

export const generateSrcLaunchProjectConfig = async (project: Project) => {
  const config = {
    ...DEFAULT_SRCLAUNCH_CONFIG,
    ...project,
  };

  const configFileContents = `import {
        BuildFormat,
        BuildPlatform,
        BuildTarget,
        BuildTool,
        CodeFormatter,
        CodeLinter,
        Project,
        ProjectType,
        SrcLaunchConfig,
        StaticTyping,
        TestReporter,
        TestTool,
      } from '@srclaunch/types';
    
    const config: Project = ${JSON.stringify(config, null, 2)};
    
    export default config;`;

  return configFileContents;
};
