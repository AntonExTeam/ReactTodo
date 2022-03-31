import React from 'react';
import TodoItem from '../TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../../actions';
import { getVisibleTodos } from '../../selectors';
import './styles.scss';

const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const addTodoHandler = text => {
    dispatch(addTodo(text));
  }

  const deleteTodoHandler = id => {
    dispatch(deleteTodo(id));
  }

  const completeTodoHandler = id => {
    dispatch(completeTodo(id));
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id}
                  todo={todo}
                  addTodo={addTodoHandler}
                  deleteTodo={deleteTodoHandler}
                  completeTodo={completeTodoHandler}/>
      ))}
    </ul>
  );
};

export default TodoList;
