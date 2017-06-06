import React from 'react'
import { randomColor } from '../utils'

const VoiceItem = ({ voice }) => (
  <li className="mdl-list__item mdl-list__item--two-line"
    style={{ backgroundColor: '#fff', marginBottom: 12, cursor: 'pointer' }}>
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar"
        style={{ backgroundColor: randomColor() }}>person</i>
      {voice.content}
      <span className="mdl-list__item-sub-title">
        作者: {voice.author} &nbsp;&nbsp;
        创建于: {getDateDiff(voice.create_at)}
      </span>
    </span>
    <span className="mdl-list__item-secondary-content">
      <span className="mdl-badge" data-badge="♥">{voice.likes}</span>
    </span>
  </li>
)

function getDateDiff(date) {
  return `${Math.ceil(((Date.now() - new Date(date).getTime()) / 1000 / 60 / 60 / 24))}天前`
}

export default VoiceItem