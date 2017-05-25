import React, { Component } from 'react'
import AppTag from '../components/app_tag'

const tags = ['hello', 'world', 'java', 'react', 'vue', 'node.js', 'angular']

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'space-around',
  flexWrap: 'wrap',
  alignContens: 'center',
  maxWidth: 200,
  height: 'auto',
  listStyle: 'none',
  padding: '12px',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)'
}

class AppTags extends Component {
  render() {
    return (
      <ul style={style}>
        {tags.map((tag, index) => <AppTag key={index} tag={tag} />)}
      </ul>
    )
  }
}

export default AppTags