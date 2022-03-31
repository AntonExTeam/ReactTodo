import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import classnames from "classnames";

export default function TodoItem({ todo, completeTodo, deleteTodo }) {
  return (
      <div className="view">
        <div className="checkbox"
             onClick={() => completeTodo(todo.id)}>
          {todo.completed && (
            <FontAwesomeIcon className="check"
                             icon={faCheck}
                             color={"green"} />
          )}
        </div>
        <p className={classnames("text", { completed: todo.completed })}>
          {todo.text}
        </p>
        <FontAwesomeIcon
          className="destroy"
          icon={faTrashCan}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
  );
}

/*
export default class TodoItem extends Component {

    state = {}

    render() {

        const { todo, completeTodo, deleteTodo } = this.props;

        let element;

        if (this.state) {
            element = (
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={todo.completed}
                           onChange={() => completeTodo(todo.id)} />
                    <span  style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                    </span>
                    <button className="destroy"
                            onClick={() => deleteTodo(todo.id)} />
                </div>
            )
        }

        return (
            <div>
                {element}
            </div>
        )
    }
};
*/
