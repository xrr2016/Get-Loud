import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, } from 'react-redux'
import { fetchVoices } from '../action/voice'
import VoiceItem from '../components/voice_item'

class VoiceList extends Component {

  componentDidMount() {
    this.props.fetchVoices()
  }

  // voices.map((voice, index) => <VoiceItem key={index} voice={voice} />)

  render() {
    const { loading, error, voices } = this.props
    return (
      <ul className="mdl-list">
        {error ? 'Working on it.' : null}
        {loading ? 'Loading...' : null}
        {voices && voices.map((voice, index) => <VoiceItem key={index} voice={voice} />)}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchVoices }, dispatch),
})

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    voices: state.voices.voices
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoiceList)