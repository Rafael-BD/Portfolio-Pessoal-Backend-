const { buildSchema } = require('graphql');
const { GraphQLJSON } = require('graphql-scalars');

// Defina o esquema GraphQL
const schema = buildSchema(`
    scalar JSON
    
    type Repository {
        name: String
        description: String
        url: String
        createdAt: String
        primaryLanguage: JSON
    }
    type Query {
        repos: [Repository]
    }
`);

schema._typeMap.JSON = GraphQLJSON;
module.exports = { schema };