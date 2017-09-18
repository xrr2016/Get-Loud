import React from 'react'
import TodoItem from './todoItem'

// const selectVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// }

export default ({todos, onToggleTodo, onRemoveTodo}) =>
  <ul className="todo-list">
    {todos.map(item => 
      <TodoItem 
        key={item.id} 
        content={item.content} 
        completed={item.completed} 
        onToggle={() => onToggleTodo(item.id)}
        onRemove={() => onRemoveTodo(item.id)}
      />)}
  </ul>