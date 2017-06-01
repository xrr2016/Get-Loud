import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, } from 'react-redux'
import { fetchVoices } from '../action/voice'
// import VoiceItem from '../components/voice_item'

const style = {
  width: 1024,
  minHeight: 524,
  margin: '0px auto',
  marginTop: '32px',
  padding: "12px 24px",
  listStyle: 'none',
  overflowX: 'hidden',
  overflowY: 'auto',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, .2)'
}

class VoiceList extends Component {

  componentDidMount() {
    this.props.fetchVoices()
  }

  render() {
    return (
      <ul style={style}>
      </ul>
    )
  }
}
        // {voices.map((voice, index) => <VoiceItem key={index} voice={voice} />)}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchVoices }, dispatch),
})

const mapStateToProps = (state) => {
  return {
    voices: state.voices
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoiceList)