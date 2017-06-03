import React, { Component } from 'react'
import Tag from './tag'

const style = {
  listStyle: 'none',
  display: 'flex',
  alignSelf: 'flex-end',
  justifyContent: 'flex-start',
  flex: 1,
  padding: 0,
  margin: 0,
}


class TagSwitch extends Component {
  state = {
    category: ['全部', '热议', '最新']
  }


  render() {
    return (
      <ul style={style}>
        {this.state.category.map(category => <Tag key={category} category={category} />)}
      </ul>
    )
  }
}

export default TagSwitch