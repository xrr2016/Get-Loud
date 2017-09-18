import React from 'react'

export default ({onToggle, onRemove, completed, content}) => (
  <li className="todo-item" style={{textDecoration: completed ? 'line-through' : 'none', 
    textDecorationColor: 'red'}}>
    <input className="toggle" type="checkbox" checked={completed ? 'checked' : ''} 
      readOnly onClick={onToggle} />
    <label className="content">{content}</label>  
    <button className="remove" onClick={onRemove}>x</button>
  </li>
)