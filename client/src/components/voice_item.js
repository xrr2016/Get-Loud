import React from 'react'
import { randomColor } from '../utils'

const style = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '18px 14px',
  margin: '12px 0px',
  backgroundColor: '#fff',
  // borderBottom: '1px solid #ebebeb'
  boxRadius: 4
}

const itemMid = {
  flex: 5,
  paddingLeft: 12,
}
const itemRight = {
  flex: 1,
  textAlign: 'center',
}
const contentStyle = {
  fontSize: 18,
  color: '#c89b01',
  margin: 0,
  fontWeight: 'normal'
}

const VoiceItem = ({ voice }) => (
  <li style={style}>
    <div style={{
      width: 50,
      height: 50,
      lineHeight: 3.2,
      color: '#fff',
      fontSize: 16,
      marginRight: 12,
      borderRadius: '50%',
      textAlign: 'center',
      backgroundColor: randomColor()
    }}
    >{voice.author}</div>
    <div style={itemMid}>
      <h5 style={contentStyle}>{voice.content}</h5>
      <span>{voice.data}by{voice.author}</span>
    </div>
    <div style={itemRight}>
      <span>
        {voice.like}
      </span>
      <span>&gt;</span>
    </div>
  </li>
)

export default VoiceItem