import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Tag extends Component {

  render() {
    return (
      <li>
        <NavLink className="app-tag"
          to={`/${this.props.category}`}>
          {this.props.category}
        </NavLink>
      </li>
    )
  }
}

export default Tag