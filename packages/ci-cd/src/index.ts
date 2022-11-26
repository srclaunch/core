import SemanticRelease, { Context } from 'semantic-release';

export default {
  analyzeCommits: (config: SemanticRelease.Config, context: Context) => {
    console.log('asdf');
    return true;
    // return context.env.FORCE_PUBLISH;
  },
};
