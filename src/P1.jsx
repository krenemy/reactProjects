import React from 'react'
import { useState } from 'react';
function P1() {
  const [color,setColor]=useState("olive");
  return (
    <div className='h-screen w-screen bg-black flex flex-col space-y-3 justify-center items-center'
    style={{backgroundColor:color}}>
      <h3 className='text-white text-center'>Change colors</h3>
      <div className='felx flex-row space-x-8'>
        <button className='border-2 border-black rounded-lg bg-white  hover:bg-orange-500'
        onClick={()=>{setColor("Blue")}}>
        Blue</button>
        <button className='border-2 border-black rounded-lg bg-white  hover:bg-orange-500'
        onClick={()=>{setColor("Red")}}>
        Red</button>
        <button className='border-2 border-black rounded-lg bg-white  hover:bg-orange-500'
        onClick={()=>{setColor("Green")}}>
        Green</button>
        <button className='border-2 border-black rounded-lg bg-white  hover:bg-orange-500'
        onClick={()=>{setColor("Yellow")}}>
        Yellow</button>
      </div>
    </div>
  )
}

export default P1