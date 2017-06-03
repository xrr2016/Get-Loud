import React, { Component } from 'react'
// import { NavLink } from 'react-router'

const style = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  flex: 1,
  height: 48,
  padding: 0,
  margin: 0,
}
const tagStyle = {
  width: 80,
  color: '#333',
  fontWeight: 600,
  fontSize: 16,
  cursor: 'pointer',
  borderBottom: '2px solid transparent'
}

class TagSwitch extends Component {
  render() {
    return (
      <ul style={style}>
        <li style={tagStyle}>全部</li>
        <li style={tagStyle}>最新</li>
        <li style={tagStyle}>热议</li>
      </ul>
    )
  }
}

export default TagSwitch