import React, { Component } from 'react'

const tags = ['hello', 'world', 'java', 'react', 'vue', 'node.js', 'angular']

const style = {
  maxWidth: 180,
  height: 'auto',
  listStyle: 'none',
  padding: '12px 0px',
  backgroundColor: '#fff'
}
const tagStyle = {
  float: 'left',
  marginRight: 12,
  marginBottom: 12,
  border: '1px solid #ddd',
  padding: '4px 6px',
  color: '#333',
  fontSize: 14,
  cursor: 'pointer'
}

class AppTags extends Component {
  render() {
    return (
      <ul style={style}>
        {tags.map((tag, index) => <li key={index} style={tagStyle}>{tag}</li>)}
      </ul>
    )
  }
}

export default AppTags