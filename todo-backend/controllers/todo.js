const { Todos } = require('../models');

exports.createTodo = async (req, res) => {
  try {
    const {text} = req.body
    let todos = await new Todos({ text, isChecked: false });
    const todo = await todos.save();
    return res.status(200).json({ status: "Todo was created", todo });
  } catch (e) {
    return res.status(500).json({ status: "error", error: e})
  }
};

//TODO add getAllTodos endpoint

//TODO add completeAllUnchecked and deleteAllChecked functionality


exports.getTodoById = async (req, res) => {
  let todo = await Todos.findById(req.params.id);
  return res.status(200).json({ status: "Todo was received", todo });
};

//TODO change to updateTodo, where user can provide fields isChecked and text for update of todo item
exports.checkTodo = async (req, res) => {
  //let todos = await Todos.updateOne({ _id: req.body.id, isChecked: false}, { $set: {isChecked: true }});
  let todo = await Todos.findByIdAndUpdate( req.params.id, { $set: {isChecked: true }}, {lean: true});
  return res.status(200).json({ status: "Todo was completed", todo });
};


exports.deleteTodo = async (req, res) => {
  await Todos.deleteOne({ _id: req.params.id });
  return res.status(200).json({ status: "Todo was deleted"});
};





