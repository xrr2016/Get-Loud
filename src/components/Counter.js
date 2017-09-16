import React, { Component } from 'react'

class Counter extends Component {
   
  state = { count: this.props.initValue }

  onClickIncrementBtn = () => this.updateCount(true)
  onClickDecrementBtn = () => this.updateCount(false)

  updateCount = (isIncrement) => {
    const prevCount = this.state.count
    const newCount = isIncrement ? prevCount + 1 : prevCount - 1
    this.setState({ count: newCount })
    this.props.onUpdate(newCount, prevCount)
  }

  render() {
    const countStyle = {margin: '16px'}
    return (
      <div style={countStyle}>
        <button onClick={this.onClickIncrementBtn}>+</button>
        <button onClick={this.onClickDecrementBtn}>-</button>
        {this.props.caption}: {this.state.count}
      </div>
    )
  }
}

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
}

export default Counter