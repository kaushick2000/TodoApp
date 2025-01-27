import React, { useEffect } from 'react'
import { useState } from 'react'
export const TodoInput = (props) => {
  const{handleAdd}=props 
  const [inputValue,setInputValue]=useState('')
  console.log(inputValue) 
 
  return (
    <div className="input-container">
      <input value={inputValue} placeholder="Add task" onChange={(e)=>{setInputValue(e.target.value)}}/>
      {/* in event handle fn like onCLick,onCHange by default it sends the paramater as event object so if you give any param it will give
       error if you wanna give anything you can give inside the arraw param.without param Onclick(handleadd),want to pass param Onclick((inside this by default event object will pass )=>handleAdd(input)) */}
      <button onClick={()=>{ 
        handleAdd(inputValue) 
        setInputValue('')}}>
        add
      </button>
     
    </div>
  )
}
