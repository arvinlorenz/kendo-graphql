require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const cors = require('cors')

const app = express();

console.log(process.env)
// allow cross-origin requests
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

mongoose.connect(process.env.MONGODB_URI)
  .then(result => {
    app.listen(4000, () => {
      console.log('now listening for requests on port 4000');
    });
  })
  .catch(e => console.log(e))


