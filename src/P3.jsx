import React from 'react'

function P3(props) {
  return (
    <div className='bg-slate-500 flex flex-col items-center'>
      <h3>Currency {props.name}</h3>
      <input className='border-2 px-4'
      type="text" 
      placeholder='Enter'
      /><label>{props.symb}</label>
    </div>
  )
}

export default P3