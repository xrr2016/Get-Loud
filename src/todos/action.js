import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType'

let nextTodoId = 0

export const addTodo = (content) => ({
  id: nextTodoId++,
  type: ADD_TODO,
  completed: false,
  content: content
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
})


