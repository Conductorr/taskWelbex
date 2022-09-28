import React, { memo } from 'react'
import './Input.scss'

function Input(props) {
  return (
    <input className='input' {...props}/>
  )
}

export default memo(Input)