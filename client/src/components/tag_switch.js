import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class TagSwitch extends Component {

  render() {
    return (
      <ul className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-tabs__tab-bar">
          <NavLink exact activeClassName="is_active" 
          href="#tab1" to='/' className="mdl-tabs__tab">全部</NavLink>
          <NavLink href="#tab2" to='/new' className="mdl-tabs__tab">热议</NavLink>
          <NavLink href="#tab3" to='/hot' className="mdl-tabs__tab">最新</NavLink>
        </div>
      </ul>
    )
  }
}
// <NavLink exact activeClassName="active" className="app-tag" to='/'>全部</NavLink>
// <NavLink activeClassName="active" className="app-tag" to='/new'>最新</NavLink>
// <NavLink activeClassName="active" className="app-tag" to='/hot'>最新</NavLink>

export default TagSwitch