import React, { memo } from 'react'
import '../styles/ValueItemHeader.scss'

function ValueItemHeader({sortData}) {


  return (

    <div className='header-container'>
      <ul className='header-container-list'>
        <button onClick={() => {sortData('Id')}} className='btn btn-primary'>ID</button>
        <button disabled style={{marginLeft: '90px'}}  className='btn btn-primary'>DATE</button >
        <button style={{marginLeft: '100px'}} onClick={() => {sortData('name')}} className='btn btn-primary'>NAME</button>
        <button style={{marginLeft: '100px'}} onClick={() => {sortData('amount')}} className='btn btn-primary'>AMOUNT</button>
        <button  onClick={() => {sortData('distance')}}className='btn btn-primary'>DISTANCE km</button >
      </ul>
    </div>
  )
}

export default memo(ValueItemHeader);

