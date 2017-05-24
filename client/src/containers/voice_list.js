import React, { Component } from 'react'
import VoiceItem from '../components/voice_item'
import data from '../data'

const style = {
  width: 1024,
  minHeight: 524,
  backgroundColor: "#fff",
  padding: "12px 24px",
  marginRight: 32,
  listStyle: 'none',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)'
}

class VoiceList extends Component {
  render() {
    return (
      <section style={style}>
        {data.map((voice, index) => <VoiceItem key={index} voice={voice} />)}
      </section>
    )
  }
}

export default VoiceList