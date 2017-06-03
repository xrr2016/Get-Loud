import React from 'react'

const style = {
  width: 200,
  height: 48,
  alignSelf: 'flex-end',
  color: '#fff',
  fontSize: 18,
  fontWeight: 600,
  textAlign: 'center',
  // marginBottom: 12,
  backgroundColor: '#c89b01',
  transtionsion: 'all .1s ease 0s',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  appearance: 'none'
}

const NewVoiceBtn = () => (
  <button style={style}>New Voice</button>
)

export default NewVoiceBtn