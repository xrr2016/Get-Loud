import React from 'react'

const style = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #ebebeb'
}
const itemLeft = {
  float: 'left',
  width: 50,
  height: 50,
  textAlign: 'center',
  color: '#333',
  fontSize: 16,
  marginRight: 12
}
const itemRight = {
  float: 'left'
}

const VoiceItem = ({ voice }) => (
  <li style={style}>
    <div style={itemLeft}>{voice.author}</div>
    <div style={itemRight}>
      <h5>{voice.content}</h5>
      <span>{voice.data}by{voice.author}</span>
    </div>
  </li>
)

export default VoiceItem