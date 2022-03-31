const { Todos } = require('../models');

exports.createTodo = async (req, res) => {
  let todos = await new Todos({ text: "" });

  todos.save((err, todo) => {
    if (err) {
      return todos.next(err);
    }
    return res.status(200).json({ status: "Todo was created", todo });
  });
};

exports.changeTodoText = async (req, res) => {
  await Todos.updateOne({ _id: req.body.id }, { text: req.body.text });
  return res.status(200).json({ status: "Todo text was updated" });
};

exports.deleteTodo = async (req, res) => {
  await Todos.deleteOne({ _id: req.query.id });
  return res.status(200).json({ status: "Todo was deleted"});
};



