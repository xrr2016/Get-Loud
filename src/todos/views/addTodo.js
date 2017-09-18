import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

class AddTodo extends Component {
  
  state = { value: '' }

  handleChange = (event) => {
    const value = event.target.value
    if (!value.trim()) { return }
    this.setState({ value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.value) { return }
    this.props.addTodo(this.state.value)
    this.state.value = ''
  }

  refInput = (node) => {
    this.input = node
  }

  render () {
    return (
      <div className="add-todo">
        <form onSubmit={ this.handleSubmit }>
          <input className="new-todo"
            onChange={ this.handleChange } value={ this.state.value }/>
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    )
  }
}

export default connect(null, addTodo)(AddTodo)
