import React from 'react'
import Tag from './Tag'

export default function TagInput({ className, tags, onTagsChange, id=null, placeholder="" }) {
  let tagsViews = tags.map(
    (e, idx) => {
      let onTagDelete = () => onTagsChange({mode: "rm", payload: e})
      return <Tag key={idx} text={e} onTagDelete={onTagDelete}/>
    }
  )

  let tagChange = (e) => {
    if (e.keyCode === 13) {
      onTagsChange({mode: "add", payload: e.target.value })
    }
    if (e.keyCoe === 'backspace' ) {
      let last = 'last'
      onTagsChange({mode: "rm", payload: last })
    }
    // backspace
  }
  return (
    <div className={className} id={id}>
      { tagsViews }
      <input type="text" onKeyDown={tagChange} placeholder={placeholder}/>
    </div>
  )
}
