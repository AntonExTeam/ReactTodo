import { addTodo, completeTodo, deleteTodo } from '../actions';
import { addTodoAxios, completeAxios, deleteAxios } from './getAPI';


// todo extract to todoThunk
export function addTodoToServer(text) {
  return async dispatch => {
    // dispatch - setLoadingState
    const response = await addTodoAxios(text)
    dispatch(addTodo(response.data.todo));
    
  };
}


