import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {completeAllTodo, clearCompleted } from '../../actions';
import Footer from '../Footer';
import TodoList from '../TodoList';
import { getCompletedTodoCount, getTodoCount } from '../../selectors';
import './styles.scss';

  const MainSection = () => {
    const todosCount = useSelector(getTodoCount)
    const todosComplete = useSelector(getCompletedTodoCount);
    const dispatch = useDispatch();

    const completeAllTodoHandler = () => {
      dispatch(completeAllTodo());
    }

    const clearCompleteTodoHandler = () => {
      dispatch(clearCompleted());
    }

    return (
      <section className="main-section">
          <TodoList/>
          {
            !!todosCount && (
              <Footer
                completedCount={todosComplete}
                activeCount={todosCount - todosComplete}
                onClearCompleted={clearCompleteTodoHandler}
                completeAlltodos={completeAllTodoHandler}
              />
            )}
      </section>
    );
  }

export default MainSection;
