import SemanticRelease, { Context } from 'semantic-release';

export default {
  analyzeCommits: (config: SemanticRelease.Config, context: Context) => {
    return context.env.FORCE_PUBLISH;
  },
};
