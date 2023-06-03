const {fetchGitHubRepositories} = require('./provider');

const resolvers = {
    repos: async () => {
        const repositories = await fetchGitHubRepositories();
        return repositories;
    }
  };

module.exports = { resolvers };