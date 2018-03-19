import React from 'react'
import './Tag.css'

export default function Tag({ text, onTagDelete }) {
  return (
    <span className="tag">{text}
      <span className="rm-btn" onClick={onTagDelete}>[X]</span>
    </span>
  )
}
