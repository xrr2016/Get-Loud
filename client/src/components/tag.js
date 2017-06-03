import React, { Component } from 'react'

const tagStyle = {
  padding: '12px 14px 4px 14px',
  color: '#333',
  fontWeight: 600,
  fontSize: 16,
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
  borderBottomColor: 'transparent'
}

class Tag extends Component {
  state = {
    hover: false
  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    let style
    if (this.state.hover) {
      style = Object.assign({}, tagStyle, { borderBottomColor: '#bc3b28' })
    }
    return (
      <li style={style ? style : tagStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>
        {this.props.category}
      </li>
    )
  }
}

export default Tag