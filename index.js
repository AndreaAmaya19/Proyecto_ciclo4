const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require ('./graphql/resolvers')
const cors = require ('cors')
const mongoose = require('mongoose');

const app = express();
const isDev = process.env.NODE_ENV !== 'production'

const typeDefs = readFileSync(
  join(__dirname, 'graphql', 'schema.graphql'),
  'utf-8'
)

mongoose.connect('mongodb+srv://proyecto_ciclo4:udea321@cluster4.o66lv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});


const schema = makeExecutableSchema({typeDefs, resolvers})

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: isDev,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');




