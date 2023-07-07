const {fetchGitHubRepositories} = require('./provider');

const resolvers = {
    repos: async () => {
        const repositories = await fetchGitHubRepositories();
        console.log(JSON.stringify(repositories, null, 2));
        return repositories;
    }
  };

module.exports = { resolvers };