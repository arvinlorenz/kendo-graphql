const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const cors = require('cors')

const app = express();


// allow cross-origin requests
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

mongoose.connect('mongodb+srv://arvin:uDbHj1RJJRnNbJ1v@cluster0.vtdi9.mongodb.net/kendo?retryWrites=true&w=majority')
  .then(result => {
    app.listen(4000, () => {
      console.log('now listening for requests on port 4000');
    });
  })
  .catch(e => console.log(e))


