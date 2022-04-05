const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema ({
  isChecked: Boolean,
  text: String
  }
);

const todos = mongoose.model('Todo', todoSchema);
module.exports = {Todos: todos};
