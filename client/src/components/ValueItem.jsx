import React, { memo } from 'react'
import '../styles/ValueItem.scss'

function ValueItem(props) {
  return (
    <div ref={props.triggerRef} className='value-container'>
    <ul className='value-container-list'>
      <li className='value-container-list-item'>{props.posts.Id}</li>
      <li className='value-container-list-item'>{props.posts.date}</li>
      <li className='value-container-list-item'>{props.posts.name}</li>
      <li className='value-container-list-item'>{props.posts.amount}</li>
      <li className='value-container-list-item'>{props.posts.distance}</li>
    </ul>
  </div>
  )
}

export default memo(ValueItem);
