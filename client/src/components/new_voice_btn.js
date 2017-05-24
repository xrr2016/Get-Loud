import React from 'react'

const style = {
  width: 180,
  height: 48,
  color: '#fff',
  fontSize: 18,
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: 12,
  backgroundColor: '#263646',
  transtionsion: 'all .1s ease 0s',
  outline: 'none',
  border: 'none',
  appearance: 'none'
}

const NewVoiceBtn = () => (
  <button style={style}>New Voice</button>
)

export default NewVoiceBtn