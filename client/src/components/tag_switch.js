import React, { Component } from 'react'
import Tag from './tag'


class TagSwitch extends Component {
  state = {
    category: ['全部', '热议', '最新']
  }


  render() {
    return (
      <ul className="app-tag-switch">
        {this.state.category.map(category => <Tag key={category} category={category} />)}
      </ul>
    )
  }
}

export default TagSwitch