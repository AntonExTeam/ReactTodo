import Axios from 'axios'
//TODO Rename filter to api

let api = Axios.create({
  baseURL: "http://localhost:8000"
})

export default api

//TODO Extract to separate file todoService in folder service
export let addTodoAxios = (text) => {
  return axios.post(`/todos/create`, {text})
}

export let completeTodoAxios = (id) => {
  return axios.put(`/todos/complete`, {id})
}

export let deleteTodoAxios = (id) => {
  return axios.delete(`/todos/delete?id=${id}`)
}
