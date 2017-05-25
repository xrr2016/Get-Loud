import React from 'react'
import { randomColor } from '../utils'

const AppTag = ({ tag }) => (
  <li style={{
    marginRight: 12,
    marginBottom: 12,
    // border: '1px solid #ddd',
    padding: '4px 6px',
    color: '#fff',
    fontSize: 14,
    cursor: 'pointer',
    backgroundColor: randomColor()
  }}>{tag}</li>
)

export default AppTag