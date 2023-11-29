import React from 'react'
import { useState } from 'react';
function Hehe() {
  let [counter,setCounter]=useState(1);
  const addVal=()=>{
    counter++;
    if(counter>=20){
      counter=20;
      setCounter(20);}
    else setCounter(counter);

  }
  const remVal=()=>{
    counter--;
    if(counter<=0){
      counter=0;
      setCounter(0);}
    else setCounter(counter);
  }
  return (
    <div>
      <h1>current val  {counter}</h1>
      <button 
      onClick={addVal}
      >incre</button>
      <button
      onClick={remVal}
      >decre</button>
    </div>
  )
}

export default Hehe