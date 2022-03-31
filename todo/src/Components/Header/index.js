import React from 'react';
import TodoTextInput from '../TodoTextInput';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';
import './styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <TodoTextInput
        newTodo
        onSave={(text) => {
          if (text.length !== 0) {
            dispatch(addTodo(text));
          }
        }}
        placeholder="Enter your task name here"
      />
    </header>
  );
};

export default Header;
