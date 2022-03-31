import React from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_TODO } from '../../constants/todoFilters';
import Badge from '../Badge';
import './styles.scss';


const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_TODO]: "ToDo",
  [SHOW_COMPLETED]: "Completed",
};

const Footer = (props) => {

  const { activeCount, completedCount, onClearCompleted, completeAlltodos } = props;

  const itemWord = activeCount === 1 ? "task" : "tasks";

  return (
    <footer className="footer">
      <span className="todo-count"
            onClick={ completeAlltodos }>
        <strong>{ activeCount }</strong> { itemWord } left
      </span>
      <ul className="filters">
        <div className="div-filters">
          {Object.keys(FILTER_TITLES).map((filter) => (
            <Badge key={filter} filter={filter} >
              {FILTER_TITLES[filter]}
            </Badge>
          ))}
        </div>

        {<button className="clear-completed"
                  onClick={ onClearCompleted }
                  style={{display: !completedCount ? 'none': 'inherit'}}>
            Clear completed
          </button>
        }
      </ul>

    </footer>
  );
};

export default Footer;
