import React, { Component } from 'react'
// import { NavLink } from 'react-router'

const style = {
  listStyle: 'none',
  display: 'flex',
  height: 60,
  fontSize: 14,
  justifyContent: 'flex-start'
}

class TagSwitch extends Component {
  render() {
    return (
      <ul style={style}>
        <li>全部</li>
        <li>最新</li>
        <li>热议</li>
      </ul>
    )
  }
}

export default TagSwitch