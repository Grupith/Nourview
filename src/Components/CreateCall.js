import React from 'react'

export default function CreateCall() {
  return (
    <div className='CreateCall'>
        <div className='ContentContainer'>
            <h3>Time</h3>
            <input type='time' />
        </div>
        <div className='ContentContainer'>
            <h3>Unit</h3>
            <input type='Number' />
        </div>
        <div className='ContentContainer'>
            <h3>Location</h3>
            <input type='text' />
        </div>
        <div className='ContentContainer'>
            <h3>Destination</h3>
            <input type='text' />
        </div>
        <div className='ContentContainer'>
            <h3>Comments</h3>
            <input type='text' />
        </div>
    </div>
  )
}
