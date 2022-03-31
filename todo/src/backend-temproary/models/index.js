const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema ({
  id: Number,
  isChecked: Boolean,
  text: String,
  }
);

const todos = mongoose.model('Todo', todoSchema);
module.exports = {Todos: todos};
