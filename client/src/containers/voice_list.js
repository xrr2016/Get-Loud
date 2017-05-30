import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect,  } from 'react-redux'
import { fetchVoices, fetchVoicesFailure, fetchVoicesSuccess } from '../action/voice'
import VoiceItem from '../components/voice_item'
import data from '../data'

const style = {
  width: 1024,
  minHeight: 524,
  backgroundColor: "#f1f1f1",
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

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    fetchVoices,
    fetchVoicesFailure,
    fetchVoicesSuccess
  }, dispatch),
})

export default connect(null, mapDispatchToProps)(VoiceList)