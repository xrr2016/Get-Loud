import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import Tag from './tag'


class TagSwitch extends Component {

  render() {
    return (
      <ul className="app-tag-switch">
        <NavLink exact activeClassName="active" className="app-tag" to='/'>全部</NavLink>
        <NavLink activeClassName="active" className="app-tag" to='/new'>最新</NavLink>
        <NavLink activeClassName="active" className="app-tag" to='/hot'>热议</NavLink>
      </ul>
    )
  }
}

export default TagSwitch