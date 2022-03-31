const express = require('express');
const bodyParser = require('body-parser');

const todo = require('./routes');
const app = express();

const mongoose = require('mongoose');








app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', todo);

app.listen(8080);
