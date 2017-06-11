import React from 'react'
import { Link } from 'react-router-dom'
import { randomColor } from '../utils'

const VoiceItem = ({ voice }) => (
  <Link to={`/voice/${voice.id}`}
    className="mdl-list__item mdl-list__item--two-line"
    style={{ backgroundColor: '#fff', marginBottom: 12, 
    cursor: 'pointer', minWidth: 600, textDecoration: 'none' }}>
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
      <img src="https://gold-cdn.xitu.io/images/post/collection.svg"
        className="app-like-icon" alt="likes" />
      <span className="app-like-count">{voice.likes}</span>
    </span>
  </Link>
)
// <img src="https://gold-cdn.xitu.io/images/post/collection_press.svg" 
// className="app-like-icon" alt="likes" />

function getDateDiff(date) {
  return `${Math.ceil(((Date.now() - new Date(date).getTime()) / 1000 / 60 / 60 / 24))}天前`
}

export default VoiceItem