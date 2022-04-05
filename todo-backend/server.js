const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const todo = require('./routes');

let mongoDB = 'mongodb://root:example@localhost:27020';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', todo);

const run = async () => {
  await mongoose.connect(mongoDB);
  app.listen(8000, () => {
    console.log('Server is running')
  });
}

run().catch(e => console.error(e))

