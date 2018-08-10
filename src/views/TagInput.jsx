import React from 'react'
import Tag from './Tag'
import PropTypes from 'prop-types'

export default function TagInput({ tags, onTagAdd, onTagRemove, id=null,
                                   placeholder="" }) {
  let tagsViews = tags.map(
    (e, idx) => {
      let onTagDelete = () => onTagDelete(e)
      return <Tag key={idx} text={e} onTagDelete={onTagDelete}/>
    }
  )

  let tagChange = (e) => {
    if (e.keyCode === 13) {
      onTagAdd(e.target.value)
    }
    if (e.keyCoe === 'backspace' ) {
      let last = 'last'
      onTagRemove(last)
    }
    // backspace
  }
  return (
    <div id={id}>
      { tagsViews }
      <input type="text" onKeyDown={tagChange} placeholder={placeholder}/>
    </div>
  )
}


TagInput.propTypes = {
  tags: PropTypes.array.isRequired,
  onTagAdd: PropTypes.func.isRequired,
  onTagRemove: PropTypes.func.isRequired,
  id: PropTypes.number,
  placeholder: PropTypes.string,
}
