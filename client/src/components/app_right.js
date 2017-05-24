import React from 'react'
import NewVoiceBtn from './new_voice_btn'
import AppTags from '../containers/app_tags'

const style = {
  // backgroundColor: "#fff",
  // boxShadow: '0 0 4px rgba(0, 0, 0, .2)'
}

const AppRight = () => (
  <div style={style}>
    <NewVoiceBtn />
    <AppTags />
  </div>
)

export default AppRight