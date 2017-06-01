import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, } from 'react-redux'
import { fetchVoices } from '../action/voice'
import VoiceItem from '../components/voice_item'

const style = {
  width: 1024,
  minHeight: 524,
  margin: '0px auto',
  marginTop: '32px',
  padding: "12px 24px",
  listStyle: 'none',
  backgroundColor: "#fff",
  overflowX: 'hidden',
  overflowY: 'auto',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)'
}

class VoiceList extends Component {

  state = {
    voices: []
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <ul style={style}>
        {voices.map((voice, index) => <VoiceItem key={index} voice={voice} />)}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchVoices }, dispatch),
})

export default connect(null, mapDispatchToProps)(VoiceList)