require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./src/schema');
const { resolvers } = require('./src/resolvers');


const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor GraphQL iniciado na porta ${PORT}`);
});
