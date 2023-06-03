const { buildSchema } = require('graphql');

// Defina o esquema GraphQL
const schema = buildSchema(`
    type Repository {
        name: String
        description: String
        url: String
    }
    type Query {
        repos: [Repository]
    }
`);

module.exports = { schema };