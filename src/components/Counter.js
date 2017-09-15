import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: this.props.ininValue || 0 
  }

  handleClickIncrementBtn = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClickDecrementBtn = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickIncrementBtn}>+</button>
        <button onClick={this.handleClickDecrementBtn}>-</button>
        {this.props.caption}: {this.state.count}
      </div>
    )
  }
}

export default Counter