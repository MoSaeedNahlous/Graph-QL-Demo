const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');



mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//create app.js
const app = express();

//allow cros origin requests
app.use(cors());

mongoose.connect('mongodb://localhost/gql-db');


mongoose.connection.once('open', () => {
    console.log("connected to DataBase!")
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,graphiql:true
}));


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});