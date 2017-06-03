import React, { Component } from 'react'

const tagStyle = {
  paddingBottom: 4,
  marginRight: 14,
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

  handleClick = () => { }

  render() {
    let style
    if (this.state.hover) {
      style = Object.assign({}, tagStyle, { borderBottomColor: '#bc3b28' })
    }
    return (
      <li style={style ? style : tagStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        onClick={this.handleClick}
      >
        {this.props.category}
      </li>
    )
  }
}

export default Tag