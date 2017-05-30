import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import { fetchVoices, fetchVoicesFailure, fetchVoicesSuccess } from '../action/voice'
import VoiceItem from '../components/voice_item'
import data from '../data'

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
  render() {
    return (
      <ul style={style}>
        {data.map((voice, index) => <VoiceItem key={index} voice={voice} />)}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    fetchVoices,
    fetchVoicesFailure,
    fetchVoicesSuccess
  }, dispatch),
})

export default connect(null, mapDispatchToProps)(VoiceList)