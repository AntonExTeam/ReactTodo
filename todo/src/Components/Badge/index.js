import React from 'react';
import classnames from 'classnames';
import { setVisibilityFilter } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const Badge = (props) => {
  const { filter, children } = props;

  const todosFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  const setFilter = () => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <button
      className={classnames('badge-filter', { selected: todosFilter === filter })}
      onClick={() => setFilter()}
    >
      {children}
    </button>
  );
};
export default Badge;
