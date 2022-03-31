import { SHOW_ALL } from '../constants/todoFilters';
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER
} from '../constants/actionTypes';


 const initialState = {
   todos: [],
   visibilityFilter: SHOW_ALL,
}

export default function todos(state = initialState, action) {

   switch (action.type) {

     case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now() + state.todos.length,
            completed: false,
            text: action.text,
          },
        ]
      }

     case DELETE_TODO:
       return {
         ...state,
         todos: state.todos.filter((todo) => todo.id !== action.id)
       }

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }

     case COMPLETE_ALL_TODOS:
      const areAllMarked = state.todos.every((todo) => todo.completed);
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: !areAllMarked,
        }))
      }

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false)
      }

    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      }

    default:
      return state;
  }
}




