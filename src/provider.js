const axios = require('axios');

const fetchGitHubRepositories = async () => {
    try {
        const response = await axios.post('https://api.github.com/graphql', {
        query: `
            query {
                viewer {
                    pinnedItems(first: 5, types: REPOSITORY) {
                    edges {
                        node {
                        ... on Repository {
                            name
                            description
                            url
                        }
                        }
                    }
                    }
                }
            }
        `,
        }, {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        });

        const repositories = response.data.data.viewer.pinnedItems.edges.map(
        (edge) => edge.node
        );

        return repositories;
    } catch (error) {
        console.error('Failed to fetch GitHub repositories:', error);
        throw error;
    }
};

module.exports = { fetchGitHubRepositories };
